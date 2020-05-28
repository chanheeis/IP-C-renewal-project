<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<title>IP&C</title>
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="css/style.css" />
<link rel="stylesheet" href="css/button.css" />
<script type="text/javascript"
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2b8a6b61f2cce228fc7e6b3723a5ff84&libraries=services"></script>
<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>
<!-- <script type="text/javascript" src="js/prefixfree.min.js"></script> -->
<script type="text/javascript" src="js/custom.js"></script>
<script type="text/javascript" src="js/hover.js"></script>
<script type="text/javascript" src="js/bkcolor.js"></script>
</head>

<body>
	<div id="wrap">
	<div id="modal_bg"></div>
		<header>
			<div class="bg">
				<ul class="menu nav line">
					<li class="mainon li"><a href="#">ABOUT</a></li>
					<li><a href="#SERVICES">SERVICES</a></li>
					<li><a href="#PORTFOLIO">PORTFOLIO</a></li>
					<li><a href="#CONTACT">CONTACT</a></li>
					<div class="effect"></div>
				</ul>
			</div>
		</header>
		<!--first area : main -->

		<section class="contents main_area">
			<img src="./images/main.png" />
			<div class="main_txt">
				<p class="main_txt1">IP&C</p>
				<p class="main_txt2">
					International<br />Planning<br />&<br />Consulting
				</p>
			</div>
		</section>
		<!--second area-->
		<section id="SERVICES" class="contents info_area">
			<div class="section_info">
				<ul class="box_info">
					<li>
						<div class="info_list info_first">
							<div class="info_img">
								<img src="./images/info_1.png" />
							</div>
							<strong class="list_title">MCN</strong> <span class="list_datail">Multi
								Channel Network</span>
						</div>
					</li>
					<li>
						<div class="info_list info_second">
							<div class="info_img">
								<img src="./images/info_2.png" />
							</div>
							<strong class="list_title">행사기획</strong class="list_title"> <span
								class="list_datail">행사 기획부터 연출 섭외까지</span>
						</div>
					</li>
					<li>
						<div class="info_list info_third">
							<div class="info_img">
								<img src="./images/info_3.png" />
							</div>
							<strong class="list_title">영상제작</strong> <span
								class="list_datail">홍보 동영상, 제품 소개 등<br />다양한 형태의 영상 제작
							</span class="list_datail">
						</div>
					</li>
					<li>
						<div class="info_list info_forth">
							<div class="info_img">
								<img src="./images/info_4.png" />
							</div>
							<strong class="list_title">홍보대행</strong class="list_title"> <span
								class="list_datail">뷰티, 여행, 먹방, 웹드라마<br />등을 활용하여 홍보
							</span class="list_datail">
						</div>
					</li>
				</ul>
			</div>
		</section>
		<!--third area :-->
		<c:forEach var="list" items="${resultList}" varStatus="status">
			<c:if test="${status.first}">
				<section id="PORTFOLIO" class="content company_history_area">
					<div class="pf_wrap">
						<div class="ci_box">
							<ul>
		                        <li>
		                            <img src="images/logo.png" />
		                        </li>
		                        <li>
		                            <img src="images/logo.png" />
		                        </li>
		                        <li>
		                            <img src="images/logo.png" />
		                        </li>
		                        <li>
		                            <img src="images/logo.png" />
		                        </li>
		                        <li>
		                            <img src="images/logo.png" />
		                        </li>
		                    </ul>
						</div>
			</c:if>
			<c:if test="${!status.first}">
				<section id="PORTFOLIO" class="content company_history_area hidden">
					<div class="pf_wrap">
			</c:if>
					
						<div id="portfolio-box-wrapper" class="pf_box">
							<ul class="portfolio-box">
								<c:forEach var="data" items="${list}">
									<li class="pf_list portfolio">
										<div style="cursor:pointer;" onclick="javascript:fn_popup('${data.image_url}')">
											<div class="pf_link">
												<a class="pf_linka" href="http://www.naver.com" target="_blank"><img class="link_img" src="./images/link_white.png" width="23"/></a>
											</div>
											<div class="pf_box2">
												<dl>
													<dt class="pf_title">${data.HIST_TITLE}</dt>
													<dd class="pf_datail">${data.HIST_CONTENT}</dd>
												</dl>
											</div>
											<span class="pf_date"> ${data.HIST_DATE} </span>
										</div>
									</li>
								</c:forEach>
							</ul>
						</div>
					</div>
					<c:if test="${status.first}">
						<div class="btn_area" style="margin-top:25px;">
							<button class="bttn-material-circle bttn-md bttn-primary" 
								onclick="fn_unfold()">∨</button>
							<button class="bttn-material-circle bttn-md bttn-primary hidden" 
								onclick="fn_fold()">^</button>
						</div>
					</c:if>
				</section>
			
		</c:forEach>

		<!--four area : map-->
		<section id="CONTACT" class="contents map_area">
			<div id="comp_map" class="wrap_map" style="height: 70%;"></div>
		</section>
		<!--footer-->
		<footer>
            <div class="wrap_footer">
                <div class="box_footer">
                    <div class="footer_logo">
                        <img src="./images/logo.png" />
                    </div>
                    <div class="footer_info">
                        <p>
                            주소 : 인천광역시 연수구 갯벌로 12, 갯벌타워 803호               대표전화 : 032)203-8533<br />
                            팩스 : 032)203-8530              E-mail : 76skm@daum.net
                        </p>
                        <a href="https://www.youtube.com/channel/UC_0qnHJBf5pobS5BKrH3q1g" target="_blank"><img class="sns" src="images/sns_youtube.png" width="30px" height="30px" /></a>
                        <a href=""><img class="sns" src="images/sns_facebook.png" width="25px" height="25px" /></a>
                        <a href="https://blog.naver.com/ipnc16" target="_blank"><img class="sns" src="images/sns_naver.png" width="25px" height="25px" /></a>
                        <a href=""><img class="sns" src="images/sns_insta.png" width="25px" height="25px" /></a>
                    </div>
                </div>
                <p class="Copyright">Copyright © IP&C. All Rights Reserved.</p>
            </div>
        </footer>
	</div>
	<div class="modal hidden">
        <img class="modal_img" src="https://www.ipnc.kr/?lightbox=dataItem-jrty6nxt">
        <button onclick="fn_modal_close()"><img src="https://image.flaticon.com/icons/svg/1828/1828774.svg" width="30px" height="30px" /></button>
	</div>
</body>

<script type="text/javascript">
	var overlay = null;
	var container = document.getElementById('comp_map'), options = {
		center : new kakao.maps.LatLng(37.3824971, 126.6551811),
		level : 3
	};

	var map = new kakao.maps.Map(container, options);

	//마커가 표시될 위치입니다 
	var markerPosition = new kakao.maps.LatLng(37.3824267, 126.65557);

	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
		position : markerPosition
	});

	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);
	
	// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
	var mapTypeControl = new kakao.maps.MapTypeControl();

	// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
	// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
	map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

	// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
	var zoomControl = new kakao.maps.ZoomControl();
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

	function markerInform() {
		var content = '<div class="wrap">'
				+ '    <div class="info">'
				+ '            IP&C'
				+ '            <div class="close" onclick="closeOverlay()" title="닫기"></div>'
				+ '    </div>' + '</div>';

		if (!overlay) {
			//마커 위에 커스텀오버레이를 표시합니다
			//마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
			overlay = new kakao.maps.CustomOverlay({
				content : content,
				map : map,
				position : marker.getPosition()
			});
		}

		//마커를 클릭했을 때 커스텀 오버레이를 표시합니다
		kakao.maps.event.addListener(marker, 'click', function() {
			overlay.setMap(map);
		});

	};

	//커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
	function closeOverlay() {
		overlay.setMap(null);
	};

	markerInform();

	$('#comp_map').find('area').click(function() {
		markerInform();
	});

	//portfolio 펼치기
	function fn_unfold() {
		var portfolio = $('.company_history_area');

		for(var i=0; i<portfolio.length; i++){
			if ($(portfolio[i]).hasClass('hidden')){
				$(portfolio[i]).removeClass('hidden');
				var btnDiv = $('.btn_area');
				if(i == 1){
					if($($(btnDiv.children('button'))[1]).hasClass('hidden')){
						$($(btnDiv.children('button'))[1]).removeClass('hidden');
					}
				}
				if(i == portfolio.length-1){
					if(!$($(btnDiv.children('button'))[0]).hasClass('hidden')){
						$($(btnDiv.children('button'))[0]).addClass('hidden');						
					}
				}
				btnDiv.remove();
				$(portfolio[i]).append(btnDiv);
				return;	
			}
		}
	}

	//portfolio 접기
	function fn_fold() {
		var portfolio = $('.company_history_area');

		for (var i = portfolio.length-1; i >= 0; i--) {
			if (!$(portfolio[i]).hasClass('hidden')) {
				$(portfolio[i]).addClass('hidden');
				var btnDiv = $('.btn_area');
				if(i < portfolio.length){
					if($($(btnDiv.children('button'))[0]).hasClass('hidden')){
						$($(btnDiv.children('button'))[0]).removeClass('hidden');
					}
				}
				if(i == 1){
					$($(btnDiv.children('button'))[1]).addClass('hidden');
				}
				btnDiv.remove();
				$(portfolio[i-1]).append(btnDiv);
				return;
			}
		}

	}
	
	//portfolio 팝업
	function fn_popup(fileNm){
		var imgUrl = fileNm;
		//$('.modal_img').attr('src','/filepath/background.png');
		//$('.modal_img').attr('src','/img/background.png');
		$('.modal_img').attr('src','/var/lib/tomcat8/webapps/FilsUploads/'+fileNm);
		$('.modal').removeClass('hidden');
		$('#modal_bg').fadeIn(300);
	}
	
	//portfolio 팝업 닫기
	function fn_modal_close(){
		$('.modal').addClass('hidden');
		$('#modal_bg').fadeOut(300);
	}
</script>
</html>