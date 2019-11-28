package net.notices.springboot.muralnoticescrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.notices.springboot.muralnoticescrud.model.Notice;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {

}
