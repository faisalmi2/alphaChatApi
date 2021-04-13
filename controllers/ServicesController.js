'use strict'

const servicesData =require('../data/services');

const GetServices = async(req,res,next)=>{
    try {        
        const services = await servicesData.GetServices();
        if(!services.success) return res.status(400).send(services.message);
        res.send(services);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const AddService = async(req,res,next)=>{
    try {        
        const { ServiceName } = req.body;

        const service = await servicesData.AddService({ ServiceName });
        if(!service.success) return res.status(400).send(service.message);
        res.send(service);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports ={
    GetServices,AddService
}