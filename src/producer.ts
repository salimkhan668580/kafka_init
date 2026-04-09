

import express, { Request, Response } from "express";
import {producer } from "./kafkaConfig";
const ProducerRouter= express.Router();




ProducerRouter.get("/", async(req:Request,res:Response)=>{

  await producer.connect()
  await producer.send({
    topic: 'login-notification',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
    res.json({
        status:"OK",
        message:"Message sent to Kafka topic successfully"
    })

})    


export default ProducerRouter;