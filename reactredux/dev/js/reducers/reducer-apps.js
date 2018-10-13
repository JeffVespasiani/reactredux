import {fetchApps} from '../actions/index';
import {FETCH_APPS_START, FETCH_APPS_SUCCESS, FETCH_APPS_FAIL} from '../actions/index';

export default function(state=null, action) {
	
	switch(action.type){
		case FETCH_APPS_SUCCESS:
			return action.apps;
			break;
	}
	/*fetch('http://phobos.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppaidapplications/limit=100/json')
		.then(response => response.json())
		.then((findresponse) => {this.setState({apps: findresponse.feed.entry})})*/
	
	
	//Placeholder data to test app functionality; will be removed when JSON call works
	return [
		{
			"id": 1,
			"im:name":{"label": "testone"},
			"im:image":[
{"label":"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/29/3b/f5/293bf5df-bd6f-1f0c-c3f8-edf50557a001/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/53x53bb-85.png", "attributes":{"height":"53"}}, 
{"label":"https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/29/3b/f5/293bf5df-bd6f-1f0c-c3f8-edf50557a001/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/75x75bb-85.png", "attributes":{"height":"75"}}, 
{"label":"https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/29/3b/f5/293bf5df-bd6f-1f0c-c3f8-edf50557a001/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/100x100bb-85.png", "attributes":{"height":"100"}}],
			"im:releaseDate":{"label": "2012-04-16T00:00:00-07:00"},
			"summary": {"label": "Just put some stuff here"},
			"im:price":{"label":"$3.99", "attributes":{"amount":"3.99000", "currency":"USD"}},
			"category":{"attributes":{"label":"Category goes here"}},
			"link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/app/dark-sky-weather/id517329357?mt=8&uo=2"}},
			"im:artist":{"label":"Jackadam", "attributes":{"href":"https://itunes.apple.com/us/developer/jackadam/id461812081?mt=8&uo=2"}},
		},
		{
			"id": 2,
			"im:name":{"label": "testtwo"},
			"im:image":[
{"label":"https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/69/4b/1b/694b1b19-d08c-da34-ff3f-547d6541294b/AppIcon-1x_U007emarketing-85-220-8.png/53x53bb-85.png", "attributes":{"height":"53"}}, 
{"label":"https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/69/4b/1b/694b1b19-d08c-da34-ff3f-547d6541294b/AppIcon-1x_U007emarketing-85-220-8.png/75x75bb-85.png", "attributes":{"height":"75"}}, 
{"label":"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/69/4b/1b/694b1b19-d08c-da34-ff3f-547d6541294b/AppIcon-1x_U007emarketing-85-220-8.png/100x100bb-85.png", "attributes":{"height":"100"}}],
			"im:releaseDate":{"label": "2012-04-16T00:00:00-07:00"},
			"summary": {"label": "Other stuff here"},
			"im:price":{"label":"$3.99", "attributes":{"amount":"3.99000", "currency":"USD"}},
			"category":{"attributes":{"label":"Category goes here"}},
			"link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/app/dark-sky-weather/id517329357?mt=8&uo=2"}},
			"im:artist":{"label":"Jackadam", "attributes":{"href":"https://itunes.apple.com/us/developer/jackadam/id461812081?mt=8&uo=2"}},
		},
		{
			"id": 3,
			"im:name": {"label": "testthree"},
			"im:image":[
{"label":"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/b9/f1/9c/b9f19cf1-21cc-1354-fca4-662d160eaf82/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb-85.png", "attributes":{"height":"53"}}, 
{"label":"https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/b9/f1/9c/b9f19cf1-21cc-1354-fca4-662d160eaf82/AppIcon-1x_U007emarketing-85-220-6.png/75x75bb-85.png", "attributes":{"height":"75"}}, 
{"label":"https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/b9/f1/9c/b9f19cf1-21cc-1354-fca4-662d160eaf82/AppIcon-1x_U007emarketing-85-220-6.png/100x100bb-85.png", "attributes":{"height":"100"}}],
			"im:releaseDate":{"label": "2012-04-16T00:00:00-07:00"},
			"summary": {"label": "Stuff"},
			"im:price":{"label":"$3.99", "attributes":{"amount":"3.99000", "currency":"USD"}},
			"category":{"attributes":{"label":"Category goes here"}},
			"link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://itunes.apple.com/us/app/dark-sky-weather/id517329357?mt=8&uo=2"}},
			"im:artist":{"label":"Jackadam", "attributes":{"href":"https://itunes.apple.com/us/developer/jackadam/id461812081?mt=8&uo=2"}},
		}
	]
	
}

