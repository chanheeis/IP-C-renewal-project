package com.IPNC.main.DAO;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.IPNC.main.VO.HistoryVO;

@Repository
public class MainDAOImpl implements MainDAO {
	
	@Inject
	private SqlSession sqlSession;
	
	private static final String namespce = "MainMapper";
	
	@Override
	public List<?> selectHistory(String userid) {
		return sqlSession.selectList(namespce+".selectHistory");
	}
}
	