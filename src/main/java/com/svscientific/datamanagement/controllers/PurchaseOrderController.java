package com.svscientific.datamanagement.controllers;

import com.svscientific.datamanagement.models.Orders;
import com.svscientific.datamanagement.models.PurchaseOrder;
import com.svscientific.datamanagement.services.PurchaseOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;
import java.util.TimeZone;

@RestController
@RequestMapping("/api/purchaseorder")
public class PurchaseOrderController {

    @Autowired private PurchaseOrderService purchaseOrderService;

    @RequestMapping(value = "/saveorder", method = RequestMethod.POST)
    public void saveOrder(@RequestBody Orders order){
        purchaseOrderService.addNewOrder(order);
    }

    @RequestMapping(value = "/getallorders", method = RequestMethod.GET)
    public List<Orders> allorders(){
        return purchaseOrderService.getAllOrders();
    }

    @RequestMapping(value = "/savepurchaseorder", method = RequestMethod.POST)
    public void savePurchaseOrder(@RequestBody PurchaseOrder purchaseOrder){
        Date date = new Date(Calendar.getInstance().getTimeInMillis());
        purchaseOrder.setInserteddate(date);
        purchaseOrderService.addNewPurchaseOrder(purchaseOrder);
    }

    @RequestMapping(value = "/getallpurchaseorders", method = RequestMethod.GET)
    public List<PurchaseOrder> allpurchaseorders(){
        return purchaseOrderService.getAllPurchaseOrders();
    }

    @RequestMapping(value = "/getallordersbypoid", method = RequestMethod.GET)
    public List<Orders> allOrdersByPOID(@RequestParam("purchaseorderid") String purchaseorderid){
        return purchaseOrderService.getAllOrdersByPurchaseOrderId(purchaseorderid);
    }
}
