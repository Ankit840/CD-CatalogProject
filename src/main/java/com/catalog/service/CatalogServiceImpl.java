package com.catalog.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.catalog.Entity.CatalogEntity;
import com.catalog.dto.CatalogDTO;
import com.catalog.repo.CatalogRepository;


@Service
public class CatalogServiceImpl implements ICatalogService {
	Logger loger= LoggerFactory.getLogger(CatalogServiceImpl.class);
	
	@Autowired
	public CatalogRepository repo;

	@Override
	public CatalogDTO saveCatalog(CatalogDTO catalog) {
		
		ModelMapper mm = new ModelMapper();
		CatalogEntity e = mm.map(catalog, CatalogEntity.class);
		CatalogEntity saved= repo.save(e);
		return mm.map(saved,CatalogDTO.class);
		
	}

	@Override
	public CatalogDTO updateCatalog(CatalogDTO catalog) {
		CatalogDTO dto=null;
		
		return dto;
	}

	@Override
	public CatalogDTO editCatalog(Integer id) {
		CatalogDTO dto=null;
		CatalogEntity entity=null;
		try {
			entity=repo.getById(id);
			dto=new CatalogDTO();
			BeanUtils.copyProperties(entity, dto);
		}catch (Exception e) {
			loger.info("Unable to find catalog >>>",e);
		}
		return dto;
	}

	@Override
	public void deleteCatalog(Integer id) {
		repo.deleteById(id);
	}

	@Override
	public List<CatalogDTO> getAllCatalogs() {
		List<CatalogDTO> lstCtlDto=null;
		List<CatalogEntity> lstCtlEntity=null;
		try {
			lstCtlEntity=repo.findAll();
			lstCtlDto=lstCtlEntity.stream().map(data->{
				CatalogDTO cDto=new CatalogDTO();
				BeanUtils.copyProperties(data, cDto);
				return cDto;
			}).collect(Collectors.toList());
		}catch (Exception e) {
			loger.info("Unable to featch Catalog Details >>>",e);
		}
		return lstCtlDto;
	}

	@Override
	public List<String> getAllArtists() {
		
		return repo.findDistinctArtists();
	}

	@Override
	public List<CatalogDTO> getCatalogByArtist(String artist) {
		ModelMapper mm = new ModelMapper();
		return repo.findAllByArtist(artist).stream().map((e) -> mm.map(e, CatalogDTO.class)).collect(Collectors.toList());
	}
	
}


