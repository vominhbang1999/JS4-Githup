// var ahihi = {
// 	nhachovay: 0,
// 	init: function (a) {
// 		$('input[name='+a+']').each(function(){
// 			if($(this).prop("checked")){
// 				ahihi.nhachovay = parseInt($(this).val()) 
// 			}
// 			$(this).on('change', function() {
// 				ahihi.nhachovay = parseInt($(this).val()) 
// 			})
// 		})
// 	},
// 	tinhtoan: function() {
// 		$('#tinhtoan').on('change', function(){
// 			let a = parseInt($(this).val()) * ahihi.nhachovay
// 			console.log(a)
// 		})
// 	} 
// }

// ahihi.init('chondi')
// ahihi.tinhtoan()

// var ahihi = {
// 	init: () => {
// 		let result = ahihi.kiemtraradio()
// 		ahihi.kiemtracanvay()
// 		console.log(result)
// 	},
// 	kiemtraradio() {
// 		let n = 0 
// 		$("input[type='radio']").each(function(){
// 			if($(this).prop("checked")){
// 				n = parseInt($(this).val())
// 			}
// 		})
// 		return n

// 	},
// 	kiemtracanvay() {
// 		return parseInt($("#tinhtoan").val())
// 	}
// }

// ahihi.init()


var ahihi = {
	init: () => {
		ahihi.tinhtoan()
		$('input').on('change', function() {
			ahihi.tinhtoan()
		})
	},
	tinhtoan:() => {
		let result = ahihi.kiemtraradio() * (ahihi.kiemtracanvay('canvay') - ahihi.kiemtracanvay('duatruoc'))
		console.log(result)
	},
	kiemtraradio() {
		let n = 0 
		$("input[type='radio']").each(function(){
			if($(this).prop("checked")){
				if(parseInt($(this).val()) == 1) {
					n = 0.2
				} else {
					n = 0.3
				}
			}
		})
		return n

	},
	kiemtracanvay(e) {
		return parseInt($('#'+e).val())
	}
}

ahihi.init()
