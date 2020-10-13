package com.svscientific.datamanagement.services;

import com.svscientific.datamanagement.models.CounterParty;
import com.svscientific.datamanagement.models.Make;
import com.svscientific.datamanagement.models.Material;
import com.svscientific.datamanagement.models.Quantity;
import com.svscientific.datamanagement.repository.CounterPartyRepository;
import com.svscientific.datamanagement.repository.MakeRepository;
import com.svscientific.datamanagement.repository.MaterialRepository;
import com.svscientific.datamanagement.repository.QuantityRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilitiesService {

    private static final Logger logger = LoggerFactory.getLogger(UtilitiesService.class);

    @Autowired private MakeRepository makeRepository;
    @Autowired private MaterialRepository materialRepository;
    @Autowired private CounterPartyRepository counterPartyRepository;
    @Autowired private QuantityRepository quantityRepository;

    public List<Make> getAllMakes(){
        List<Make> allMakes = makeRepository.findAll();
        logger.info("All Makes are == {}",allMakes.toString());
        return allMakes;
    }

    public void insertMake(Make make){
        try{
            makeRepository.save(make);
            logger.info("Make inserted successfully");
        }catch (Exception e ){
            logger.error("Error inserting Make {} with exception {}",make.toString(),e.getLocalizedMessage());
        }
    }

    public List<Material> getAllMaterials(){
        List<Material> materialList = materialRepository.findAll();
        logger.info("All Materials are == {}",materialList.toString());
        return materialList;
    }

    public void insertMaterial(Material material){
        try{
            materialRepository.save(material);
            logger.info("Material inserted successfully");
        }catch (Exception e ){
            logger.error("Error inserting Material {} with exception {}",material.toString(),e.getLocalizedMessage());
        }
    }

    public List<Quantity> getAllQuantities(){
        List<Quantity> allQuantities = quantityRepository.findAll();
        logger.info("All Quantities are == {}",allQuantities.toString());
        return allQuantities;
    }

    public void insertQuantity(Quantity quantity){
        try{
            quantityRepository.save(quantity);
            logger.info("Quantity inserted successfully");
        }catch (Exception e ){
            logger.error("Error inserting Quantity {} with exception {}",quantity.toString(),e.getLocalizedMessage());
        }
    }

    public List<CounterParty> getAllCounterParties(){
        List<CounterParty> allCounterParties = counterPartyRepository.findAll();
        logger.info("All Counterparties are == {}",allCounterParties.toString());
        return allCounterParties;
    }

    public void insertCounterParty(CounterParty counterParty){
        try{
            counterPartyRepository.save(counterParty);
            logger.info("CounterParty inserted successfully");
        }catch (Exception e ){
            logger.error("Error inserting CounterParty {} with exception {}",counterParty.toString(),e.getLocalizedMessage());
        }
    }
}
