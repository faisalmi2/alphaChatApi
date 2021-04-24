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
        const { ServiceName,Slug } = req.body;

        const service = await servicesData.AddService({ ServiceName,Slug });
        if(!service.success) return res.status(400).send(service.message);
        res.send(service);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const GetServicePrerequisites = async(req,res,next)=>{
    try {        
        const id=req.params.id;
        //console.log(req.params);
        const servicesPrerequisites = await servicesData.GetServicePrerequisites(id);
        if(!servicesPrerequisites.success) return res.status(400).send(servicesPrerequisites.message);
        res.send(servicesPrerequisites);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports ={
    GetServices,AddService,GetServicePrerequisites
}