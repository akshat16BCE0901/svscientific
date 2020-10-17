package com.svscientific.datamanagement.controllers;

import com.svscientific.datamanagement.models.Orders;
import com.svscientific.datamanagement.services.PurchaseOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/purchaseorder")
public class PurchaseOrderController {

    @Autowired private PurchaseOrderService purchaseOrderService;

    @RequestMapping("/saveorder")
    public void saveOrder(@RequestBody Orders order){
        purchaseOrderService.addNewOrder(order);
    }
}
