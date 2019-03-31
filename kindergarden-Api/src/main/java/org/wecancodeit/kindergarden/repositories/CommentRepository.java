package org.wecancodeit.kindergarden.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.kindergarden.models.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {

	Comment findByContent(String string);
}
