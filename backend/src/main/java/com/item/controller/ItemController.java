package com.item.controller;

import com.item.dto.ItemRequest;
import com.item.modeling.Item;
import com.item.service.ItemService;
import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/items")
public class ItemController {

    private final ItemService service;

    public ItemController(ItemService service) {
        this.service = service;
    }

    // ✅ CREATE ITEM
    @PostMapping
    public ResponseEntity<Item> addItem(@Valid @RequestBody ItemRequest request) {
        return new ResponseEntity<>(service.createItem(request), HttpStatus.CREATED);
    }

    // ✅ GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItem(@PathVariable Long id) {
        return ResponseEntity.ok(service.getItemById(id));
    }

    // ✅ GET ALL
    @GetMapping
    public ResponseEntity<List<Item>> getAllItems() {
        return ResponseEntity.ok(service.getAllItems());
    }
}