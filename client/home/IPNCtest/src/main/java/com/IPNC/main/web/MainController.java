package com.IPNC.main.web;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.IPNC.main.DAO.MainDAO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class MainController {

	@Inject
	private MainDAO dao;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model, HttpServletRequest request, HttpServletResponse response) {

		List<Map<String, Object>> historyList = new ArrayList<Map<String, Object>>();

		List<List<Map<String, Object>>> result = new ArrayList();

		historyList = (List) dao.selectHistory("");
		
		int size = 0;	
		
		if(historyList.size()%2 != 0) {
			size = historyList.size()+1;
		}else {
			size = historyList.size();
		}
		
		for (int i = 0; i < size/2; i++) {

			List<Map<String, Object>> tempList = new ArrayList<Map<String, Object>>();
			tempList.add(historyList.get(i*2));
			tempList.add(historyList.get(i*2+1));
			
			result.add(tempList);

		}

		System.out.println(result);

		model.addAttribute("resultList", result);

		return "main";
	}
	
	@RequestMapping(value = "/popupPortfolio.do", method = RequestMethod.GET)
	public String popupPortfolio(Model model, HttpServletRequest request, HttpServletResponse response) {

		

		return "popup/popupPortfolio";
	}

}
