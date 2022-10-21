var topComp = '<div>TOPだよ</div>';
var userComp = '<div>USERです</div>';

var myRouter = new VueRouter({
	routes: [
		{ path: '/top',
			component:{ 
				template: topComp
		 	} 
		 },
		{ path: '/users',
			component:{ 
				template:userComp
		 	} 
		}
	]
});

var app = new Vue(
    {
    	router: myRouter,
		methods: {
			btnClick: function(){
				this.$router.push(
					{ path:'/btn' }
				)
			}
		}
}).$mount('#app');
