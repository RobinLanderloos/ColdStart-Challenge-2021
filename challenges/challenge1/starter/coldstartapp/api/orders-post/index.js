const { getUser } = require('../shared/user-utils');
const { QueueClient } = require("@azure/storage-queue");
const { v4: uuidv4 } = require('uuid');
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const queueName = "pre-orders";

module.exports = async function (context, req) {
  const queueClient = new QueueClient(AZURE_STORAGE_CONNECTION_STRING, queueName);
  console.log('Getting user details');
  // Get the user details from the request
  const user = getUser(req);

  console.log('Checking if user is valid');
  // If user is unauthorized, stop and return
  if(user === null){
    context.res.status(401);
    return;
  }

  console.log('Creating pre-order object');
  // Get the pre-order from the request
  const orderId = uuidv4();
  let date = new Date();
  const utcDate = date.toUTCString();

  const preOrder = {
    Id: orderId,
    User: user.userDetails,
    Date: utcDate,
    IcecreamId: req.body,
    Status: 'New',
    DriverId: null,
    FullAddress: '1 Microsoft Way, Redmond, WA 98052, USA',
    LastPosition: null
  };
  
  console.log('Pushing pre-order to the queue');
  // Add the pre-order JSON document in a queue
  await queueClient.sendMessage(JSON.stringify(preOrder));
  context.res.status(201);
};
