package com.example.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.dsmeta.entities.Sale;
import com.example.dsmeta.repositories.SaleRepositorie;

@Service
public class SaleService {

	@Autowired
	private SaleRepositorie repositorie;
	
	public Page<Sale> findSales(String minDate,String maxDate,Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		
		return repositorie.findSales(min, max, pageable);
	}
	
//	01:08h
}
