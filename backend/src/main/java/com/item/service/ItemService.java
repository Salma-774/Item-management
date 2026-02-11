package com.item.service;

import com.item.dto.ItemRequest;
import com.item.exception.ItemNotFoundException;
import com.item.modeling.Item;
import com.item.repository.ItemRepository;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service

public class ItemService {

    private final ItemRepository repository;

 
	public ItemService(ItemRepository repository) {
		super();
		this.repository = repository;
	}

	public Item createItem(ItemRequest request) {

        Item item = new Item();
        item.setName(request.getName());
        item.setDescription(request.getDescription());
        item.setCategory(request.getCategory());
        item.setPrice(request.getPrice());
        item.setCreatedAt(LocalDateTime.now());

        return repository.save(item);
    }

    public Item getItemById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ItemNotFoundException("Item not found with id: " + id));
    }
    public List<Item> getAllItems() {
        return repository.findAll();
    }
}