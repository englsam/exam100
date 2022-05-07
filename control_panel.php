<style>
		/*====== 컨트롤패널 ======= */
		#cntl_panel_outer{			
			width:100%; 
			margin:0 auto;
			height:72px; 
			position: sticky;
			top: 0;

			-webkit-box-shadow: 0 1px 2px 0 #777;
			 box-shadow: 0 1px 2px 0 #777;
			 background-color:white;
		}
		#cntl_panel_inner{			
			
			width: 25cm; 
			height:70px;
			margin:0 auto;
			height:70px;
			text-align:center;
			padding-top:20px;		
		}
		.cntl_inner2{

			display:inline-block;
			text-align:center;
			margin-right:20px;
			
		}
</style>

<!-- ============  control page div ================== -->

<div id="cntl_panel_outer" class="noPrint">
	<div id="cntl_panel_inner" >
		<div class="cntl_inner2" >
			<button type="button" class="btn btn-info" id="print_all"><span style="font-size:12px;">정답지+해설지 프린트</span></button>
		</div>
		<div class="cntl_inner2">
				<input type="checkbox" class="form-check-input" id="check1" name="option1" value="">정답
				<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span>
				<input type="checkbox" class="form-check-input" id="check2" name="option2" value="">해설 
		</div>
	</div>
</div>

<!-- =================================================  -->



<script>

//////////////// =====  정답... 풀이 버튼 ====== ////////////////////////////////
$(document).on('click', '#check1', function() {		// 정답을 클릭하면

		if($("input:checkbox[id='check1']").is(":checked") == true){		// 선택되면...

			$('.td_selected').css('color','red');
			$('.td_selected').css('background-color','#FAED7D');
			$('.ans_div').css('color','blue');
			$('.ans_div').css('font-size','11px');
		}else{
			$('.td_selected').css('color','black');
			$('.td_selected').css('background-color','white');
			$('.ans_div').css('color','white');
			$('.ans_div').css('font-size','0');
		}

	});

$(document).on('click', '#check2', function() {	// 해설을 클릭하면

		if($("input:checkbox[id='check2']").is(":checked") == true){		// 선택되면...

			$('.sol_div').css('font-size','11px');
			$('.sol_div').css('color','#FF00DD');
		}else{
			
			$('.sol_div').css('color','white');
			$('.sol_div').css('font-size','0');
		}

	});
////////////////////////////////////////////////////////////////////////////


//////////  print //////////////////////////////////
$("#print_all").click(function(){	// 정답만 prin
//	$('.noPrint').css('display','none');
	window.print();
});



</script>