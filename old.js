'use strict';

const { Pool, Client } = require('pg');
const Alexa = require('ask-sdk-core');
// use 'ask-sdk' if standard SDK module is installed

// Code for the handlers here


exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,	                           
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .lambda();


const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput){
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse()
  }
};


const HelloWorldIntentHandler1 = {
  canHandle(handlerInput) {	
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && 
           handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput) {
    const speechText = 'Hello World!';
    return handlerInput.responseBuilder
          .speak(speechText)
          .withSimpleCard('Hello World', speechText)
	  .getResponse();
  }
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
  return handlerInput.requestEnvelope.request.type === 'IntentRequest' && 
         handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';	
  },
  handle(handlerInput) {
    const speechText = 'You can say hello to me!';
    return handlerInput.responseBuilder		   
	   .speak(speechText)
           .reprompt(speechText)
	   .withSimpleCard('Hello World', speechText)	              
	   .getResponse();
  }
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
  return handlerInput.requestEnvelope.request.type === 'IntentRequest' && 
         (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' || 
	 handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {		            
  const speechText = 'Goodbye!';
  return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard('Hello World', speechText)
	.getResponse();
  }
};


const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {	
    //any cleanup logic goes here
    return handlerInput.responseBuilder.getResponse();
  }
};




const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    return handlerInput.responseBuilder
           .speak('Sorry, I can\'t understand the command. Please say again.')
           .reprompt('Sorry, I can\'t understand the command. Please say again.')
           .getResponse();
  },
};


const HelloWorldIntentHandler = {
  canHandle(handlerInput) {	
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && 
           handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput) {
///*
    let pool = new Pool({
      user: process.env.USER,	
      host: process.env.URI,
      database: process.env.DB,  
      password: process.env.PW,
      port: process.env.PORT
      })
	console.log("meeeeee", pool)
///*
    const query = {
      name: 'fetch-room',
      text: 'SELECT roomname FROM rooms WHERE roomname = $1',
      values: ['kitchen'],
      rowmode: 'array'
    }
    
    const speechText = 'okay Pedro';
   /* try {
	let result =  await pool.query(query)
        console.log("res", result)
	await pool.end()
	if (result){
	   	
	  return handlerInput.responseBuilder
		.speak(speechText)
		.getResponse();
	}    
    }
    catch(err){
      console.log(err.stack, "error on query")
    }
*/ // await sleep(10000)

    return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
	    .getResponse();
/*
    const speechText = 'okay Pedro';
    return handlerInput.responseBuilder
          .speak(speechText)
          .withSimpleCard('Hello World', speechText)
	  .getResponse();
*/
  }

};

function query(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
