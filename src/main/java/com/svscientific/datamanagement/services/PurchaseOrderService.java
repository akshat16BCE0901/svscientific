package com.svscientific.datamanagement.services;

import com.svscientific.datamanagement.models.Orders;
import com.svscientific.datamanagement.models.PurchaseOrder;
import com.svscientific.datamanagement.repository.OrderRepository;
import com.svscientific.datamanagement.repository.PurchaseOrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseOrderService {

    private static final Logger logger = LoggerFactory.getLogger(PurchaseOrderService.class);
    @Autowired private OrderRepository orderRepository;
    @Autowired private PurchaseOrderRepository purchaseOrderRepository;

    public void addNewOrder(Orders order){
        orderRepository.save(order);
    }

    public List<Orders> getAllOrders(){
        return orderRepository.findAll();
    }

    public void addNewPurchaseOrder(PurchaseOrder purchaseOrder){
        purchaseOrderRepository.save(purchaseOrder);
    }

    public List<PurchaseOrder> getAllPurchaseOrders(){
        return purchaseOrderRepository.findAll();
    }

    public List<Orders> getAllOrdersByPurchaseOrderId(String purchaseOrderId){

        List<Orders> ordersList = orderRepository.findAllByPurchaseorderid(purchaseOrderId);
        logger.info("All purchaseorders by purchae orde id are {}",ordersList.toString());
        return ordersList;
    }
}
