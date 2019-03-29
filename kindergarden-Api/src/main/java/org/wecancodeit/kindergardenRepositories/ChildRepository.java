package org.wecancodeit.kindergardenRepositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.kindergarden.models.Child;

@Repository
public interface ChildRepository extends CrudRepository<Child, Long> {

}
