package com.example.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dsmeta.entities.Sale;
import com.example.dsmeta.repositories.SaleRepositorie;

@Service
public class SaleService {

	@Autowired
	private SaleRepositorie repositorie;
	
	public List<Sale> findSales() {
		return repositorie.findAll();
	}
}
