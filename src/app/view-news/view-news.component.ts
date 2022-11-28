import { Component } from '@angular/core';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent {
  data:any = {
    "status":"ok",
    "totalResults":38,
    "articles":[
       {
          "source":{
             "id":null,
             "name":"Investing.com"
          },
          "author":"Reuters",
          "title":"China's anti-lockdown protests shake stocks and oil By Reuters - Investing.com",
          "description":"China's anti-lockdown protests shake stocks and oil",
          "url":"https://www.investing.com/news/stock-market-news/stocks-oil-skid-as-chinas-covid-protests-roil-sentiment-2952401",
          "urlToImage":"https://i-invdn-com.investing.com/news/CrudeOil_800x533_L_1610558889.jpg",
          "publishedAt":"2022-11-28T10:26:00Z",
          "content":"By Scott Murdoch and Lawrence White\r\nSYDNEY/LONDON (Reuters) - Stocks and commodities prices suffered a broad sell-off on Monday as rare protests in major Chinese cities against the country's strict … [+3492 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"NDTV News"
          },
          "author":null,
          "title":"\"Both Are Assets\": Rahul Gandhi Amid Ashok Gehlot vs Sachin Pilot - NDTV",
          "description":"Rahul Gandhi, reacting today to an NDTV interview in which Ashok Gehlot called his Rajasthan rival Sachin Pilot a \"gaddar (traitor)\" who could never be Chief Minister of the state, said both leaders are important to the Congress.",
          "url":"https://www.ndtv.com/india-news/rahul-gandhi-says-both-leaders-are-assets-to-congress-after-ashok-gehlots-remarks-against-sachin-pilot-in-ndtv-interview-3559357",
          "urlToImage":"https://c.ndtvimg.com/2022-11/j9isnfj_rahul-gandhi_650x400_28_November_22.jpg",
          "publishedAt":"2022-11-28T09:51:00Z",
          "content":"The Congress yesterday said it would not hesitate to take \"tough decisions\" in Rajasthan\r\nIndore: Rahul Gandhi, reacting today to an NDTV interview in which Ashok Gehlot called his Rajasthan rival Sa… [+2490 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"Theswaddle.com"
          },
          "author":"Amlan Sarkar",
          "title":"A Measles Outbreak Among Poor Children in Mumbai Points to Vaccine Inequality - The Swaddle",
          "description":"Experts say the pandemic hindered vaccine coverage — but the disproportionate burden is carried by the poor.",
          "url":"https://theswaddle.com/a-measles-outbreak-among-poor-children-in-mumbai-points-to-vaccine-inequality/",
          "urlToImage":"https://swaddle-wkwcb6s.stackpathdns.com/wp-content/uploads/2022/11/281122_measles-vax-inequality_Editorial.png",
          "publishedAt":"2022-11-28T09:35:46Z",
          "content":"Mumbai is currently reeling under a measles outbreak. The Hindureported that by 24th November, there were already 233 cases of measles in Mumbai, and one death too. The states of Bihar, Gujarat, Hary… [+5863 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"Bar & Bench - Indian Legal News"
          },
          "author":"Debayan Roy",
          "title":"Collegium: Supreme Court objects to Law Minister Kiren Rijiju's remarks on television - Bar & Bench - Indian Legal News",
          "description":"The Supreme Court on Monday expressed reservations about the remarks made by Union Law Minister Kiren Rijiju about the Collegium system of appointing judges.",
          "url":"https://www.barandbench.com/news/collegium-supreme-court-objects-to-law-minister-kiren-rijijus-remarks-on-television",
          "urlToImage":"https://gumlet.assettype.com/barandbench%2F2022-11%2F7217c2ee-0315-44d3-a9bc-deea7c06fa06%2FSUPREME_COURT_OF_INDIA__WEB_PAGE_1600x900___Copyrr.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
          "publishedAt":"2022-11-28T08:59:57Z",
          "content":"A bench of Justices Sanjay Kishan Kaul and AS Oka also cautioned the government against passing judicial orders to ensure that recommendations made by the Collegium are cleared.\r\n\"Mr. Attorney Genera… [+1488 chars]"
       },
       {
          "source":{
             "id":"espn-cric-info",
             "name":"ESPN Cric Info"
          },
          "author":"ESPNcricinfo staff",
          "title":"Gaikwad smashes List A record with seven sixes in 43-run over - ESPNcricinfo",
          "description":"Shiva Singh was the bowler to suffer in the penultimate over of the Vijay Hazare Trophy quarter-final match in Ahmedabad",
          "url":"https://www.espncricinfo.com/story/maharashtras-ruturaj-gaikwad-enters-record-books-after-smashing-seven-sixes-in-over-in-vijay-hazare-trophy-vs-up-1346761",
          "urlToImage":"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/331700/331753.6.jpg",
          "publishedAt":"2022-11-28T08:37:30Z",
          "content":"NewsShiva Singh was the bowler to suffer in the penultimate over of the Vijay Hazare Trophy quarter-final match in Ahmedabad"
       },
       {
          "source":{
             "id":"google-news",
             "name":"Google News"
          },
          "author":null,
          "title":"SpaceX Dragon carrying solar panels and science experiments docks with ISS - The Indian Express",
          "description":null,
          "url":"https://news.google.com/__i/rss/rd/articles/CBMibmh0dHBzOi8vaW5kaWFuZXhwcmVzcy5jb20vYXJ0aWNsZS90ZWNobm9sb2d5L3NjaWVuY2Uvc3BhY2V4LWRyYWdvbi1jcnMtMjYtaW50ZXJuYXRpb25hbC1zcGFjZS1zdGF0aW9uLTgyOTQyMTUv0gEA?oc=5",
          "urlToImage":null,
          "publishedAt":"2022-11-28T08:33:24Z",
          "content":null
       },
       {
          "source":{
             "id":null,
             "name":"Livemint"
          },
          "author":"Vijay Kishore",
          "title":"Stock Market LIVE: Indices at record high, Nifty at 18,600; BPCL, Reliance gain | Mint - Mint",
          "description":"Share Market LIVE Update: Indian stock markets are trading in green with Sensex and Nifty touching new highs. Reliance, Hero MotoCorp and BPCL jump, and JSW Steel and Hindalco shed 2%. Oil & Gas and Auto index shine, while Metal is trading lower.",
          "url":"https://www.livemint.com/market/share-market-live-updates-sensex-nifty-bse-nse-stock-market-today-28-11-2022-11669596255865.html",
          "urlToImage":"https://images.livemint.com/img/2022/11/28/600x338/sensex_1669611770280_1669611770464_1669611770464.jpg",
          "publishedAt":"2022-11-28T08:28:55Z",
          "content":"After a buoyant week, investors are expected to start the week with caution. With a lack of overarching global cues, volatility may persist. The rising number of cases of Covid in China and citizens … [+31366 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"NDTV News"
          },
          "author":null,
          "title":"Viral: Varun Dhawan's ROFL Hint About Kriti Sanon Dating, Ahem, Prabhas - NDTV Movies",
          "description":"Varun Dhawan and Kriti Sanon promoted their film Bhediya at Jhalak Dikhhla Jaa's Finale",
          "url":"https://www.ndtv.com/entertainment/viral-varun-dhawans-rofl-hint-about-kriti-sanon-dating-ahem-prabhas-3559243",
          "urlToImage":"https://c.ndtvimg.com/2022-11/kr82jtno_kriti-sanon_625x300_28_November_22.jpg",
          "publishedAt":"2022-11-28T07:56:27Z",
          "content":"Prabhas shared this picture. (courtesy: actorprabhas)\r\nNew Delhi: Kriti Sanon and Prabhas are creating a heavy buzz on the Internet after Varun Dhawan hinted at Kriti's relationship status. Bhediya s… [+1528 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"GSMArena.com"
          },
          "author":"Michail",
          "title":"Xiaomi 13 series and MIUI 14 launching on December 1 - GSMArena.com news - GSMArena.com",
          "description":"Xiaomi is also gearing up to launch its Watch S2 smartwatch and  Xiaomi Buds 4 TWS earphones as well as its first desktop computer and a projector.",
          "url":"https://www.gsmarena.com/xiaomi_13_series_and_miui_14_launching_on_december_1-news-56669.php",
          "urlToImage":"https://fdn.gsmarena.com/imgroot/news/22/11/xiaomi-13-launch-dec-1/-952x498w6/gsmarena_00.jpg",
          "publishedAt":"2022-11-28T07:56:01Z",
          "content":"Xiaomi finally confirmed the launch date for its upcoming Xiaomi 13 series phones. The launch event is scheduled for Thursday, December 1 at 7 PM Beijing time. We also got confirmation that MIUI 14 w… [+803 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"Hindustan Times"
          },
          "author":"HT News Desk",
          "title":"Top court stays HC's order to develop Amaravati as Andhra capital in 6 months - Hindustan Times",
          "description":"Andhra capital controversy: The Supreme Court said on Monday “courts cannot become a town planner\".  | Latest News India",
          "url":"https://www.hindustantimes.com/india-news/sc-stays-hc-s-march-order-to-andhra-to-develop-amaravati-as-capital-in-6-months-101669621422270.html",
          "urlToImage":"https://images.hindustantimes.com/img/2022/11/28/1600x900/0161095e-6b77-11ed-a893-f7cb495c1b3d_1669365197492_1669365197492_1669621539566_1669621539566.jpg",
          "publishedAt":"2022-11-28T07:46:26Z",
          "content":"The Supreme Court has stayed the order by the Andhra Pradesh High Court, which was issued in March, directing the state government to develop Amaravati as the capital city within six months. A bench … [+2508 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"NDTV News"
          },
          "author":null,
          "title":"Another Delhi Shocker: An Affair, Murder, Body Chopped Up, Kept In Fridge - NDTV",
          "description":"As the horror over Shraddha Walkar's brutal murder continues to hang heavy over Delhi, police have found clues pointing to a similar crime in the eastern part of the city.",
          "url":"https://www.ndtv.com/india-news/delhi-pandav-nagar-murder-woman-son-arrested-for-mans-murder-chopped-up-body-and-kept-it-in-fridge-dumped-it-over-days-3559003",
          "urlToImage":"https://c.ndtvimg.com/2022-11/2bvbfp_pand_625x300_28_November_22.jpg",
          "publishedAt":"2022-11-28T07:33:00Z",
          "content":"The accused, Poonam and her son Dipak, allegedly killed Das in June over an illicit affair, police said\r\nNew Delhi: As the horror over Shraddha Walkar's brutal murder continues to hang heavy over Del… [+2399 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"India Education Diary"
          },
          "author":"iednewsdesk",
          "title":"Cornell University: Webb telescope shows exoplanet atmosphere as never seen before - India Education Diary",
          "description":"Known for beaming stunning images back to Earth, NASA’s James Webb Space Telescope just scored another first: a molecular and chemical portrait of a distant world’s skiesThe telescope’s array of highly sensitive instruments was trained on the atmosph",
          "url":"https://indiaeducationdiary.in/cornell-university-webb-telescope-shows-exoplanet-atmosphere-as-never-seen-before/",
          "urlToImage":"https://i0.wp.com/indiaeducationdiary.in/wp-content/uploads/2021/12/Cornell-University.png?fit=395%2C128&ssl=1",
          "publishedAt":"2022-11-28T07:28:57Z",
          "content":"Known for beaming stunning images back to Earth, NASAs James Webb Space Telescope just scored another first: a molecular and chemical portrait of a distant worlds skies\r\nThe telescopes array of highl… [+5460 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"News18"
          },
          "author":"Pallavi Ghosh",
          "title":"Hit by 'Neech Aadmi' Boomerang in 2017, Congress Props Up 'Poorest of Poor' Kharge Against 'Humble' Modi - News18",
          "description":"Not just Kharge’s Dalit background, Congress hopes his ascendance from the ranks will help clear the narrative that the Gandhis are entitled and the party is not in sync with the common man",
          "url":"https://www.news18.com/news/elections/hit-by-neech-aadmi-boomerang-in-2017-congress-props-up-poorest-of-poor-kharge-against-humble-modi-6487177.html",
          "urlToImage":"https://images.news18.com/ibnlive/uploads/2022/10/sonia-kharge-166678469716x9.jpg",
          "publishedAt":"2022-11-28T07:11:08Z",
          "content":"In 2017, when things seemed to be going good for the Congress, Mani Shankar Aiyars comment calling the prime minister a neech aadmi became the turning back moment for the Grand Old Party. It gave the… [+2129 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"Businessworld.in"
          },
          "author":null,
          "title":"ICMR Issues Guidelines On Usage And Time Limit Of Antibiotics - BW Healthcareworld",
          "description":"News and Updates for Healthcare in India - , Healthcare Service Providers-ICMR has said in the guidelines that for skin and soft tissue infections, antibiotics should be given for five days. At the same time, antibiotics should be given for five days in case …",
          "url":"http://bwhealthcareworld.businessworld.in/article/ICMR-Issues-Guidelines-On-Usage-And-Time-Limit-Of-Antibiotics/28-11-2022-455809",
          "urlToImage":"http://static.businessworld.in/article/article_large_image/1487061451_072yiZ_medicine-reu-470.jpg",
          "publishedAt":"2022-11-28T07:02:20Z",
          "content":"ICMR has said in the guidelines that for skin and soft tissue infections, antibiotics should be given for five days. At the same time, antibiotics should be given for five days in case of pneumonia c… [+1379 chars]"
       },
       {
          "source":{
             "id":"google-news",
             "name":"Google News"
          },
          "author":null,
          "title":"Best Cyber Monday 2022 Deals on 4K TVs, streaming devices & home audio - XDA Developers",
          "description":null,
          "url":"https://news.google.com/__i/rss/rd/articles/CBMiQGh0dHBzOi8vd3d3LnhkYS1kZXZlbG9wZXJzLmNvbS9iZXN0LWN5YmVyLW1vbmRheS10di1hdWRpby1kZWFscy_SAQA?oc=5",
          "urlToImage":null,
          "publishedAt":"2022-11-28T07:00:00Z",
          "content":null
       },
       {
          "source":{
             "id":"the-times-of-india",
             "name":"The Times of India"
          },
          "author":"ET Online",
          "title":"WhatsApp allows lucky beta users to share and save contact cards directly on chat - Economic Times",
          "description":"The new update by WhatsApp makes the entry point ‘Contacts available.",
          "url":"https://economictimes.indiatimes.com/magazines/panache/whatsapp-allows-lucky-beta-users-to-share-and-save-contact-cards-directly-on-chat/articleshow/95820177.cms",
          "urlToImage":"https://img.etimg.com/thumb/msid-95820214,width-1070,height-580,imgsize-42340,overlay-etpanache/photo.jpg",
          "publishedAt":"2022-11-28T06:53:00Z",
          "content":"Meta-owned instant messaging platform, WhatsApp, has started rolling an update for its Windows beta users which gives them the ability to share contact cards.\r\nThe new update allows WhatsApp users to… [+1633 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"The Indian Express"
          },
          "author":"Science Desk",
          "title":"Watch stunning top-down footage of Artemis 1 launch - The Indian Express",
          "description":"Watch a unique \"top-down\" view of the Artemis 1 launch taken from a camera aboard the Orion spacecraft.",
          "url":"https://indianexpress.com/article/technology/science/artemis-1-launch-top-down-footage-8293882/",
          "urlToImage":"https://images.indianexpress.com/2022/11/Artemis-1-launch-top-down-footage-20221128.jpg",
          "publishedAt":"2022-11-28T06:38:03Z",
          "content":"After the Orion spacecraft broke a world record set by the Apollo 13 mission, the European Space Agency (ESA) shared footage of the Artemis 1 launch taken from an unusual angle. The ESA footage of th… [+1807 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"Healthshots.com"
          },
          "author":"Dr Sriram Srikakulapu",
          "title":"Dealing with fatty liver? Don’t fall for these 7 myths - Health shots",
          "description":"Fatty liver disease is a rising concern among all people. Throughout its treatment, make sure you don't fall for these common myths about fatty liver disease.",
          "url":"https://www.healthshots.com/preventive-care/self-care/7-myths-about-fatty-liver-disease/",
          "urlToImage":"https://images.healthshots.com/healthshots/en/uploads/2022/11/28115606/fatty-liver.jpg",
          "publishedAt":"2022-11-28T06:35:00Z",
          "content":"Fatty liver disease is characterized by fat deposits in the liver. Non-alcoholic fatty liver disease (NAFLD) and alcoholic steatohepatitis, another name for alcohol-associated fatty liver disease, ma… [+5835 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"Koimoi"
          },
          "author":"Joginder Tuteja",
          "title":"Drishyam 2 Box Office Day 10: Ajay Devgn Starrer Jumps Further On Sunday, Has An Excellent Second Weekend - Koimoi",
          "description":"Continuing its momentum well into the 10th day, Drishyam 2 scored quite well on the second Sunday as well with 17 crores* coming in.",
          "url":"https://www.koimoi.com/box-office/drishyam-2-box-office-day-10-ajay-devgn-starrer-jumps-further-on-sunday-has-an-excellent-second-weekend/",
          "urlToImage":"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/box-office-drishyam-2-jumps-further-on-sunday-has-an-excellent-second-weekend-001.jpg",
          "publishedAt":"2022-11-28T06:11:36Z",
          "content":"Box Office – Drishyam 2 jumps further on Sunday, has an excellent second weekend(Photo Credit Still From Drishyam 2)\r\nContinuing its momentum well into the 10th day, Drishyam 2 scored quite well on t… [+1720 chars]"
       },
       {
          "source":{
             "id":null,
             "name":"Hindustan Times"
          },
          "author":"Trisha Sengupta",
          "title":"Scientist tries dropping eggs from space without breaking. Watch how that ends - Hindustan Times",
          "description":"The viral video showing a scientist trying to drop eggs from space without breaking them was posted on YouTube | Trending",
          "url":"https://www.hindustantimes.com/trending/scientist-tries-dropping-eggs-from-space-without-breaking-watch-how-that-ends-101669615282730.html",
          "urlToImage":"https://images.hindustantimes.com/img/2022/11/28/1600x900/Space_Eggs_Viral_Video_Scientist_YouTube_Expriment_1669615523811_1669615533828_1669615533828.PNG",
          "publishedAt":"2022-11-28T06:10:32Z",
          "content":"Former Nasa scientist and YouTuber Mark Rober often shares such experiment videos that leave people amazed. His channel is filled with incredible videos that show him trying out different things. Jus… [+1669 chars]"
       }
    ]
 }


 
}
