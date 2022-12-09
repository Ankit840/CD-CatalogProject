package com.catalog.dto;

import lombok.Data;

@Data
public class CatalogDTO {
	private Integer id; 
	private String title;
	private String artist;
	private String country;
	private String company;
	private Double price;
	private Integer year;
}
