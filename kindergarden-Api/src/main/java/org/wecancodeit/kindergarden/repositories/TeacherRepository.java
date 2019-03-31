package org.wecancodeit.kindergarden.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.kindergarden.models.Teacher;

@Repository
public interface TeacherRepository extends CrudRepository<Teacher, Long>{

}
