package org.jasig.ssp.service.impl;

import java.util.UUID;

import org.jasig.ssp.dao.PersonEducationGoalDao;
import org.jasig.ssp.model.ObjectStatus;
import org.jasig.ssp.model.Person;
import org.jasig.ssp.model.PersonEducationGoal;
import org.jasig.ssp.service.ObjectNotFoundException;
import org.jasig.ssp.service.PersonEducationGoalService;
import org.jasig.ssp.util.sort.PagingWrapper;
import org.jasig.ssp.util.sort.SortingAndPaging;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * PersonEducationGoal service implementation
 */
@Service
public class PersonEducationGoalServiceImpl implements
		PersonEducationGoalService {

	@Autowired
	private transient PersonEducationGoalDao dao;

	@Override
	public PagingWrapper<PersonEducationGoal> getAll(
			final SortingAndPaging sAndP) {
		return dao.getAll(sAndP);
	}

	@Override
	public PersonEducationGoal get(final UUID id)
			throws ObjectNotFoundException {
		return dao.get(id);
	}

	@Override
	public PersonEducationGoal forPerson(final Person person) {
		return dao.forPerson(person);
	}

	@Override
	public PersonEducationGoal create(final PersonEducationGoal obj) {
		return dao.save(obj);
	}

	@Override
	public PersonEducationGoal save(final PersonEducationGoal obj)
			throws ObjectNotFoundException {
		return dao.save(obj);
	}

	@Override
	public void delete(final UUID id) throws ObjectNotFoundException {
		final PersonEducationGoal current = get(id);

		if (null != current) {
			current.setObjectStatus(ObjectStatus.INACTIVE);
			save(current);
		}
	}
}