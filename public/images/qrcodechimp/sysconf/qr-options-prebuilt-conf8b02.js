QROptions.prebuilt = [
 {
        tag : "General", // prebuild-0
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build0.png",
		svgDefs :"",
					
        conf : {
			
			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "#333333",
				background: "#ffffff00",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},

			SVG_OPTS :
			{
				container: "svg",
				data: {
					l: "#square",
					lr: "#square",
					lt: "#square",
					ltr: "#square",
					ltrb: "#square",
					s: "#square",
					z: "#square",
					scale: 0.79,
                			strokeWidth : 0,
					fill: "#333333",
					stroke: "#fffdd090"
				},
				
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-11.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/2089-Square.svg",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-11.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/2089-Square.svg",
				timingPattern: "#square",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "#333333",
				strokeWidth: 0,
				stroke: "#ffcccc"
			}
		}  
    },
 {
        tag : "General", //prebuild-1
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build1.png",
		svgDefs : ` <linearGradient id="grad_fgCG" x1="0%" y1="0%" x2="0%" y2="100%">           
                                          <stop offset="0%" style="stop-color:#0ba8bcf0;stop-opacity:1" />          
                                          <stop offset="100%" style="stop-color:#0a2994f0;stop-opacity:1" /> 
                            </linearGradient> `,
					
        conf : {
			

			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "url(#grad_fgCG)",
				background: "#ffffffa0",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},

			SVG_OPTS :
			{
				container: "svg",
				data: {
					s:"#circle",
                			z:"#circle",
                			l:"#semicircle",
                			lt:"#circle",
                			lr:"#circle",
                			ltr:"#circle",
                			ltrb:"#circle",
                			scale : 1,
                			strokeWidth : 0,
					fill: "url(#grad_fgCG)",
					stroke: "#fffdd090"
				},
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-4.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/2074-Circle.svg",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-4.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/2074-Circle.svg",
				timingPattern: "#circle",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "url(#grad_fgCG)",
				strokeWidth: 0,
				stroke: "#ffcccc"
			}
		}
},
 {
        tag : "General", //prebuild-2
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build2.png",
		svgDefs : ` <linearGradient id="grad_fgCG" x1="0%" y1="0%" x2="0%" y2="100%">            
				<stop offset="0%" style="stop-color:#1ed328f0;stop-opacity:1" />            
				<stop offset="100%" style="stop-color:#03470dff;stop-opacity:1" />        
			    </linearGradient>`,
					
        conf : {
			
			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "url(#grad_fgCG)",
				background: "#ffffffa0",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundRounded: false,

				backgroundRoundedRadius: 0.12,
				predefined: 1
			},



			SVG_OPTS :

			{

				container: "svg",

				data: {

					s:"#qcircle",
                			z:"#circle",
                			l:"#qcircle",
                			lt:"#c_rect",
                			lr:"#c_rect",
                			ltr:"#qcircle",
                			ltrb:"#circle",
                			scale : 0.9,
                			strokeWidth : 0,
					fill: "url(#grad_fgCG)",
					stroke: "#fffdd090"
				},

				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-6.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/2074-Circle.svg",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-6.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/2074-Circle.svg",
				timingPattern: "#rect",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "url(#grad_fgCG)",
				strokeWidth: 0,
				stroke: "#ffcccc"
			}
		}  
},
 {
        tag : "General", //like-us-sticker, prebuild-3
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build3.png",
		svgDefs :"",
					
        conf : {
			
			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "#333333",
				background: "#ffffff00",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundImage:{
					image: "https://qrcodechimp.s3.amazonaws.com/sysconf/sticker-13.svg",
					clipX: 10,
            				clipY: 45,
            				clipSize: 95,
            				clipReposition: false,
            				autoColor: false, //perCell, imageAvg, gif, false 
            				autoColorBoost: 1.0,
            				autoColorAlpha: 1,
            				autoColorAlphaStroke: 0,
            				clipDimmingColor: false,
	    				clipUseBgBeforeDimmingColor : true,
            				returnImageSize: "bgOriginal",
					imageId: "sticker-13"
                                     },
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},

			SVG_OPTS :
			{
				container: "svg",
				data: {
					s:"https://qrcodechimp.s3.amazonaws.com/sysconf/2096-DiamondII.svg",
                			z:"https://qrcodechimp.s3.amazonaws.com/sysconf/2096-DiamondII.svg",
                			l:"https://qrcodechimp.s3.amazonaws.com/sysconf/2096-DiamondII.svg",
                			lt:"https://qrcodechimp.s3.amazonaws.com/sysconf/2096-DiamondII.svg",
                			lr:"https://qrcodechimp.s3.amazonaws.com/sysconf/2096-DiamondII.svg",
                			ltr:"https://qrcodechimp.s3.amazonaws.com/sysconf/2096-DiamondII.svg",
                			ltrb:"https://qrcodechimp.s3.amazonaws.com/sysconf/2096-DiamondII.svg",
                			scale : 1.2,
                			strokeWidth : 0,
					fill: "#333333",
					stroke: "#fffdd090"
				},
				fill: "#086da9ff",
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-8.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_13.svg",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-8.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_13.svg",
				timingPattern: "https://qrcodechimp.s3.amazonaws.com/sysconf/2096-DiamondII.svg",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				strokeWidth: 0,
				stroke: "#ffcccc"
			}
		}  
},
 {
        tag : "General", //watch-video-sticker, prebuild-4
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build4.png",
		svgDefs :"",
					
        conf : {
			
			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "#333333",
				background: "#ffffffa0",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundImage:{
					image: "https://qrcodechimp.s3.amazonaws.com/sysconf/sticker-16.svg",
					clipX: 7,
            				clipY: 47,
            				clipSize: 95,
            				clipReposition: false,
            				autoColor: false, //perCell, imageAvg, gif, false 
            				autoColorBoost: 1.0,
            				autoColorAlpha: 1,
            				autoColorAlphaStroke: 0,
            				clipDimmingColor: false,
    	    				clipUseBgBeforeDimmingColor : true,
            				returnImageSize: "bgOriginal", // bgOriginal, clipped
					imageId: "sticker-16"
                                     },
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},

			SVG_OPTS :
			{
				container: "svg",
				data: {
					s:"#circle",
                			z:"#square",
                			l:"#semicircle",
                			lt:"#qcircle",
                			lr:"#square",
                			ltr:"#square",
                			ltrb:"#square",
                			scale : 0.95,
                			strokeWidth : 0,
					fill:"#333333",
					stroke: "#fffdd090"
				},
				fill: "#a90808ff",
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-10.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/2074-Circle.svg",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-10.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/2074-Circle.svg",
				timingPattern: "#square",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				strokeWidth: 0,
				stroke: "#ffcccc"
			}
		} 
},
 {
        tag : "General", //instagram, prebuild-5
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build5.png",
		svgDefs : ` <linearGradient id="grad_fgCG" x1="0%" y1="0%" x2="100%" y2="100%">            
				<stop offset="0%" style="stop-color:#fa0533f0;stop-opacity:1" />            
				<stop offset="100%" style="stop-color:#ca620af0;stop-opacity:1" />        
			    </linearGradient>`,
					
        conf : {
			
			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "url(#grad_fgCG)",
				background: "#ffffffa0",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundImage:{
					image: "https://qrcodechimp.s3.amazonaws.com/sysconf/sticker-10.svg",
					clipX: 12,
            				clipY: 40,
            				clipSize: 100,
            				clipReposition: false,
            				autoColor: false, //perCell, imageAvg, gif, false 
           				autoColorBoost: 1.0,
            				autoColorAlpha: 1,
            				autoColorAlphaStroke: 0,
            				clipDimmingColor: false,
	    				clipUseBgBeforeDimmingColor : true,
            				returnImageSize: "bgOriginal", // bgOriginal, clipped
					imageId: "sticker-10"
                                     },
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},

			SVG_OPTS :
			{
				container: "svg",
				data: {
					s:"https://qrcodechimp.s3.amazonaws.com/sysconf/icon_4.svg",
                			z:"https://qrcodechimp.s3.amazonaws.com/sysconf/icon_4.svg",
                			l:"https://qrcodechimp.s3.amazonaws.com/sysconf/icon_4.svg",
                			lt:"https://qrcodechimp.s3.amazonaws.com/sysconf/icon_4.svg",
                			lr:"https://qrcodechimp.s3.amazonaws.com/sysconf/icon_4.svg",
                			ltr:"https://qrcodechimp.s3.amazonaws.com/sysconf/icon_4.svg",
                			ltrb:"https://qrcodechimp.s3.amazonaws.com/sysconf/icon_4.svg",
                			scale : 1,
                			strokeWidth : 0,
					fill: "url(#grad_fgCG)",
					stroke: "#fffdd090"
				},
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-6.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_16.svg",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-6.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_16.svg",
				timingPattern: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_4.svg",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "url(#grad_fgCG)",
				strokeWidth: 0,
				stroke: "#ffcccc"
			}
		}   
},
 {
        tag : "General", //prebuild-6
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build6.png",
		svgDefs : ` <linearGradient id="grad_fgCG" x1="0%" y1="0%" x2="100%" y2="100%">            
				<stop offset="0%" style="stop-color:#5f0c1cf0;stop-opacity:1" />           
				<stop offset="100%" style="stop-color:#ca620af0;stop-opacity:1" />        
			    </linearGradient>`,
					
        conf : {
			
			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "url(#grad_fgCG)",
				background: "#ffffffa0",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},

			SVG_OPTS :
			{
				container: "svg",
				data: {
					s:"#circle",
                			z:"#circle",
                			l:"#semicircle",
                			lt:"#circle",
                			lr:"#circle",
                			ltr:"#circle",
                			ltrb:"#circle",
                			scale : 0.5,  //size
                			strokeWidth : 0, //shape-thickness-width
					fill: "url(#grad_fgCG)",
					stroke: "#fffdd090"
				},
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-8.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_13.svg",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-8.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_13.svg",
				timingPattern: "#circle",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "url(#grad_fgCG)",
				strokeWidth: 0,
				stroke: "#ffcccc"
			}
		}   
},
 {
        tag : "General", //prebuild-7
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build7.png",
		svgDefs : ` <linearGradient id="grad_fgCG" x1="0%" y1="0%" x2="100%" y2="100%">            
				<stop offset="0%" style="stop-color:#e11717f0;stop-opacity:1" />            
				<stop offset="100%" style="stop-color:#0858def0;stop-opacity:1" />        
			    </linearGradient> `,
					
        conf : {
			
			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "url(#grad_fgCG)",
				background: "#ffffffa0",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},

			SVG_OPTS :
			{
				container: "svg",
				data: {
					l: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",		
					lr: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					lt: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					ltr: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					ltrb: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					s: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					z: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					scale: 1.3800000000000001,
					fill: "url(#grad_fgCG)",
					stroke: "#fffdd090"
				},
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-9.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/3balls.svg",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-9.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/3balls.svg",
				timingPattern: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "url(#grad_fgCG)",
				strokeWidth: 0,
				stroke: "#ffcccc"
			}
		}   
},
 {
        tag : "General", //prebuild-8
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build8.png",
		svgDefs : ` <linearGradient id="grad_fgCG" x1="0%" y1="0%" x2="100%" y2="0%">            
				<stop offset="0%" style="stop-color:#ff0024ff;stop-opacity:1" />           
 				<stop offset="100%" style="stop-color:#620202f0;stop-opacity:1" />        
			    </linearGradient>  `,
					
        conf : {
			
			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "url(#grad_fgCG)",
				background: "#ffffffa0",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},

			SVG_OPTS :
			{
				container: "svg",
				data: {
					l: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_9.svg",
					lr: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_9.svg",
					lt: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_9.svg",
					ltr: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_9.svg",
					ltrb: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_9.svg",
					s: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_9.svg",
					z: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_9.svg",
					scale: 1.03,
					fill: "url(#grad_fgCG)",
					stroke: "#fffdd090"
				},
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-10.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/heart-pen.svg",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-10.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/heart-pen.svg",
				timingPattern: "#rect",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "url(#grad_fgCG)",
				strokeWidth: 0,
				stroke: "#ffcccc"
			}
		}  
},
 {
        tag : "General", //prebuild-9
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build9.png",
		svgDefs :"",
					
        conf : {
			
			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "#bf1030ff",
				background: "#ffffffa0",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},

			SVG_OPTS :
			{
				container: "svg",
				data: {
					l: "https://qrcodechimp.s3.amazonaws.com/sysconf/2094-Lightning.svg",
					lr: "https://qrcodechimp.s3.amazonaws.com/sysconf/2094-Lightning.svg",
					lt: "https://qrcodechimp.s3.amazonaws.com/sysconf/2094-Lightning.svg",
					ltr: "https://qrcodechimp.s3.amazonaws.com/sysconf/2094-Lightning.svg",
					ltrb: "https://qrcodechimp.s3.amazonaws.com/sysconf/2094-Lightning.svg",
					s: "https://qrcodechimp.s3.amazonaws.com/sysconf/2094-Lightning.svg",
					z: "https://qrcodechimp.s3.amazonaws.com/sysconf/2094-Lightning.svg",
					scale: 2.34,
					fill: "#bf1030ff",
					stroke: "#fffdd090"
				},
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-3.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_12.svg",
				finderPatternInnerboxColor: "#bf1030ff",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-3.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/icon_12.svg",
				timingPattern: "https://qrcodechimp.s3.amazonaws.com/sysconf/2094-Lightning.svg",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "#08a1b7ff",
				strokeWidth: 0,
				stroke: "#ffcccc"
			}
		}    
},
 {
        tag : "General", //prebuild-10
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build10.png",
		svgDefs :' <linearGradient id="grad_eCG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6cb307f0;stop-opacity:1" /><stop offset="100%" style="stop-color:#0d1cb6ff;stop-opacity:1" /></linearGradient>',
					
        conf : {
			
			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "#0d1cb6ff",
				background: "#ffffffa0",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},

			SVG_OPTS :
			{
				container: "svg",
				data: {
					l: "https://qrcodechimp.s3.amazonaws.com/sysconf/2110-StarII.svg",
					lr: "https://qrcodechimp.s3.amazonaws.com/sysconf/2099-Flower.svg",
					lt: "https://qrcodechimp.s3.amazonaws.com/sysconf/2110-StarII.svg",
					ltr: "https://qrcodechimp.s3.amazonaws.com/sysconf/2110-StarII.svg",
					ltrb: "https://qrcodechimp.s3.amazonaws.com/sysconf/2099-Flower.svg",
					s: "https://qrcodechimp.s3.amazonaws.com/sysconf/2110-StarII.svg",	
					z: "https://qrcodechimp.s3.amazonaws.com/sysconf/2110-StarII.svg",
					scale: 1.9440000000000002,
					fill: "#bf1030ff",
					stroke: "#fffdd090"
				},
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-1.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/shield.svg",
				finderPatternInnerboxColor: "#bf1030ff",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-1.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/shield.svg",
				timingPattern: "https://qrcodechimp.s3.amazonaws.com/sysconf/2110-StarII.svg",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "url(#grad_eCG)",
				strokeWidth: 0,
				stroke: "#ffcccc"
			}
		} 
},
 {
        tag : "General", //prebuild-11
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/prebuild11.png",
		svgDefs :' <linearGradient id="grad_eCG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6cb307f0;stop-opacity:1" /><stop offset="100%" style="stop-color:#0d1cb6ff;stop-opacity:1" /></linearGradient>',
					
        conf : {
			
			QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "#0d1cb6ff",
				background: "#ffffffa0",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},

			SVG_OPTS :
			{
				container: "svg",
				data: {
					l: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					lr: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					lt: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					ltr: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					ltrb: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					s: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",	
					z: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
					scale: 1.5,
					fill: "#bf1030ff",
					stroke:  "#333333"
				},
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-11.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/octagonstar.svg",
				finderPatternInnerboxColor: "#bf1030ff",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-11.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/octagonstar.svg",
				timingPattern: "https://qrcodechimp.s3.amazonaws.com/sysconf/2087-Shape.svg",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "url(#grad_eCG)",
				strokeWidth: 0,
				stroke: "#333333"
			}
		}
},
 {
        tag : "General", //prebuild-12
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build12.png",
		svgDefs :' <linearGradient id="grad_eCG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6cb307f0;stop-opacity:1" /><stop offset="100%" style="stop-color:#0d1cb6ff;stop-opacity:1" /></linearGradient>',
					
        conf : {	


		QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "#333333",
				background: "#ffffff00",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundImage:{
					image: "https://qrcodechimp.s3.amazonaws.com/sysconf/animal-sticker2-qr-code-img.svg",
					clipX: 87,
            				clipY: 180,
            				clipSize: 175,
            				clipReposition: false,
            				autoColor: false, //perCell, imageAvg, gif, false 
            				autoColorBoost: 1.0,
            				autoColorAlpha: 1,
            				autoColorAlphaStroke: 0,
            				clipDimmingColor: false,
	    				clipUseBgBeforeDimmingColor : true,
            				returnImageSize: "bgOriginal",
					imageId: "sticker-35"
                                     },
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},




			SVG_OPTS :
			{
				container: "svg",
				data: {
					fill: "#1066eaff",
					l: "#semicircle",
					lr: "#c_rect",
					lt: "#circle",
					ltr: "#circle",
					ltrb: "#c_rect",
					s: "#c_rect",
					scale: 1,
					stroke: "#fffdd090",
					strokeWidth: 0,
					z: "#circle"
				},
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-1.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/2074-Circle.svg",
				finderPatternInnerboxColor: "#1f0202ff",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-1.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/2074-Circle.svg",
				timingPattern: "#circle",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "url(#grad_eCG)",
				strokeWidth: 0,
				stroke: "#333333"
			}
		}

},
 {
        tag : "General", //prebuild-13
        iconImg : "https://qrcodechimp.s3.amazonaws.com/sysconf/pre-build13.png",
		svgDefs :' <linearGradient id="grad_fgCG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6cb307f0;stop-opacity:1" /><stop offset="100%" style="stop-color:#0d1cb6ff;stop-opacity:1" /></linearGradient>',
					
        conf : {	


		QR_OPTS :
			{
				padding: 1,
				width: 512,
				height: 512,
				color: "url(#grad_fgCG)",
				background: "#ffffffa0",
				paddingColor: "rgba(255, 255, 255, 0.625)",
				mergeRowData: true,
				mergeColData: true,
				fillWhiteSpace: false,
				backgroundImage:{
					image: "https://qrcodechimp.s3.amazonaws.com/sysconf/save-contact-qr-code-img.svg",
					clipX: 42,
            				clipY: 43,
            				clipSize: 250,
            				clipReposition: false,
            				autoColor: false, //perCell, imageAvg, gif, false 
            				autoColorBoost: 1.0,
            				autoColorAlpha: 1,
            				autoColorAlphaStroke: 0,
            				clipDimmingColor: false,
	    				clipUseBgBeforeDimmingColor : true,
            				returnImageSize: "bgOriginal",
					imageId: "save-contact-qr-code-img"
                                     },
				backgroundRounded: false,
				backgroundRoundedRadius: 0.12,
				predefined: 1
			},


			SVG_OPTS :
			{
				container: "svg",
				data: {
					fill: "url(#grad_fgCG)",
					l: "#semicircle",
					lr: "#c_rect",
					lt: "#circle",
					ltr: "#circle",
					ltrb: "#c_rect",
					s: "#c_rect",
					scale: 0.8,
					stroke: "#fffdd090",
					strokeWidth: 0,
					z: "#circle"
				},
				finderPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-2.svg",
				finderPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/diamond.svg",
				finderPatternInnerboxColor: "#1f0202ff",
				finderPatternTransform: "flip",
				alignmentPatternOuterbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/eye-2.svg",
				alignmentPatternInnerbox: "https://qrcodechimp.s3.amazonaws.com/sysconf/diamond.svg",
				timingPattern: "#circle",
				logoImg: "",
				logoSize: 4,
				logoBgImg: "",
				logoBgSize: 5,
				scale: 1,
				fill: "url(#grad_fgCG)",
				strokeWidth: 0,
				stroke: "#333333"
			}
		}

              
   }
];