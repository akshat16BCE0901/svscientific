package com.svscientific.datamanagement.controllers;

import com.svscientific.datamanagement.models.CounterParty;
import com.svscientific.datamanagement.models.Make;
import com.svscientific.datamanagement.models.Material;
import com.svscientific.datamanagement.models.Quantity;
import com.svscientific.datamanagement.services.UtilitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/utilities")
public class UtilityController {

    @Autowired private UtilitiesService utilitiesService;

    @RequestMapping(value = "/getallmakes", method = RequestMethod.GET)
    public List<Make> getAllMakes(){
        return utilitiesService.getAllMakes();
    }

    @RequestMapping(value = "/getallquantities", method = RequestMethod.GET)
    public List<Quantity> getAllQuantities(){
        return utilitiesService.getAllQuantities();
    }

    @RequestMapping(value = "/getallmaterials", method = RequestMethod.GET)
    public List<Material> getAllMaterials(){
        return utilitiesService.getAllMaterials();
    }

    @RequestMapping(value = "/getallcounterparties", method = RequestMethod.GET)
    public List<CounterParty> getAllCounterParties(){
        return utilitiesService.getAllCounterParties();
    }

    @RequestMapping(value = "/insertmake", method = RequestMethod.POST)
    public void insertMake(@RequestBody Make make){
        utilitiesService.insertMake(make);
    }

    @RequestMapping(value = "/insertquantity", method = RequestMethod.POST)
    public void insertQuantity(@RequestBody Quantity quantity){
        utilitiesService.insertQuantity(quantity);
    }

    @RequestMapping(value = "/insertmaterial", method = RequestMethod.POST)
    public void insertMaterial(@RequestBody Material material){
        utilitiesService.insertMaterial(material);
    }

    @RequestMapping(value = "/insertcounterparty", method = RequestMethod.POST)
    public void insertCounterParty(@RequestBody CounterParty counterParty){
        utilitiesService.insertCounterParty(counterParty);
    }
}
