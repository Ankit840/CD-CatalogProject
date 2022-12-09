package com.catalog.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "CD_CATALOG")
public class CatalogEntity {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;
   @Column(name="TITLE")
   private String title;
   @Column(name="ARTIST")
   private String artist;
   @Column(name="COMPANY")
   private String company;
   @Column(name="COUNTRY")
	private String country;
   @Column(name="YEAR")
   private Integer year;
   @Column(name="PRICE")
   private Double price;

	
}
