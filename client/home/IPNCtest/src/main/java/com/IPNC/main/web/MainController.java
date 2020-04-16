package com.IPNC.main.web;

import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.IPNC.main.DAO.MainDAO;
import com.IPNC.main.VO.HistoryVO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class MainController {
	
	@Inject
	private MainDAO dao;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model, HttpServletRequest request, HttpServletResponse response) {
		
		List<?> historyList = null;
		
		historyList = dao.selectHistory("");
		
		model.addAttribute("historyList", historyList);

		return "main";
	}

}
