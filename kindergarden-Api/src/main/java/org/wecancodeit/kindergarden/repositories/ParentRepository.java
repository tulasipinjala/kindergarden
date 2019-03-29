package org.wecancodeit.kindergarden.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.kindergarden.models.Parent;

@Repository
public interface ParentRepository extends CrudRepository<Parent, Long> {

}
