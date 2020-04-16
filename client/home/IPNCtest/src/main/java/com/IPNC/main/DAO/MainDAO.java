package com.IPNC.main.DAO;

import java.util.List;

import com.IPNC.main.VO.HistoryVO;

public interface MainDAO {
	
	public List<?> selectHistory(String userid);
}
