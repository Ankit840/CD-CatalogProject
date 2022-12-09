package com.catalog.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.catalog.Entity.CatalogEntity;

@Repository
public interface CatalogRepository extends JpaRepository<CatalogEntity, Integer>{
	@Query(value = "select DISTINCT ARTIST from CD_CATALOG", nativeQuery = true)
	List<String> findDistinctArtists();
	
	List<CatalogEntity> findAllByArtist(String artist);
}
