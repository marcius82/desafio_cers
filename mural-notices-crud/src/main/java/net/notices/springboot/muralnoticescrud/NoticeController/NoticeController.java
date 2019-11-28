package net.notices.springboot.muralnoticescrud.NoticeController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.notices.springboot.muralnoticescrud.repository.NoticeRepository;
import net.notices.springboot.muralnoticescrud.exception.ResourceNotFoundException;
import net.notices.springboot.muralnoticescrud.model.Notice;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class NoticeController {
	@Autowired
	private NoticeRepository noticeRepository;
	
	@GetMapping("/notices")
	public List<Notice> getAllNotices() {
		return noticeRepository.findAll();
	}
	
	@GetMapping("/notices/{id}")
	public ResponseEntity<Notice> getNoticeById(@PathVariable(value = "id") Long noticeId)
		throws ResourceNotFoundException {
		Notice notice = noticeRepository.findById(noticeId).orElseThrow(() 
				-> new ResourceNotFoundException("Notice not found by this i d:: " + noticeId));	
		return ResponseEntity.ok().body(notice);
	}
	
	@PostMapping("/notices")
	public Notice createNotice(@Valid @RequestBody Notice notice) {
		return noticeRepository.save(notice);
	}
	
	@PutMapping("/notices/{id}")
    public ResponseEntity<Notice> updateNotice(@PathVariable(value = "id") Long noticeId, @Valid @RequestBody Notice noticeDetails) 
    	throws ResourceNotFoundException {
		Notice notice = noticeRepository.findById(noticeId).orElseThrow(() 
				-> new ResourceNotFoundException("Notice not found for this id :: " + noticeId));

        notice.setTitle(noticeDetails.getTitle());
        notice.setDescription(noticeDetails.getDescription());
        notice.setPublishedOn(noticeDetails.getPublishedOn());
        notice.setViewedOn(noticeDetails.getViewedOn());
        
        final Notice updatedNotice = noticeRepository.save(notice);
        return ResponseEntity.ok(updatedNotice);
    }
	
	@DeleteMapping("/notices/{id}")
    public Map<String, Boolean> deleteNotice(@PathVariable(value = "id") Long noticeId)
        throws ResourceNotFoundException {
        Notice notice = noticeRepository.findById(noticeId).orElseThrow(() 
        		-> new ResourceNotFoundException("Notice not found for this id :: " + noticeId));

        noticeRepository.delete(notice);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
	
}
