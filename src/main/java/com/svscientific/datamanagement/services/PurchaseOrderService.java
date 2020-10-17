package com.svscientific.datamanagement.services;

import com.svscientific.datamanagement.models.Orders;
import com.svscientific.datamanagement.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseOrderService {

    @Autowired private OrderRepository orderRepository;

    public void addNewOrder(Orders order){
        orderRepository.save(order);
    }

    public List<Orders> getAllOrders(){
        return orderRepository.findAll();
    }
}
