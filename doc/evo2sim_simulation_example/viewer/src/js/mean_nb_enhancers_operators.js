/****************************************************************************
 * Copyright (C) 2014-2016 Charles Rocabert, Carole Knibbe, Guillaume Beslon
 * Web: http://www.evoevo.eu/
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ****************************************************************************/

var data = [];
data.push([500.5, 31.22664741, 5.037942581, 3.310058602]);data.push([1501.5, 39.8330663, 4.00879096, 2.91127588]);data.push([2502.5, 38.1821672, 5.48296638, 3.60973649]);data.push([3503.5, 40.4581509, 3.71583821, 2.99872779]);data.push([4504.5, 45.3881909, 2.97459799, 2.77188199]);data.push([5505.5, 51.4180605, 2.01782144, 1.96851203]);data.push([6506.5, 48.3951794, 1.376354316, 1.144113136]);data.push([7507.5, 43.5051645, 1.092692941, 0.952887899]);data.push([8508.5, 43.104879, 0.915824893, 0.728659776]);data.push([9509.5, 42.5930906, 1.096986921, 0.999911479]);data.push([10510.5, 48.2692596, 1.92823705, 1.72337052]);data.push([11511.5, 49.3639653, 1.261235384, 1.03534807]);data.push([12512.5, 46.674747, 1.106802615, 0.971609215]);data.push([13513.5, 46.608713, 1.122222808, 1.082072716]);data.push([14514.5, 52.107103, 1.324906322, 1.280378499]);data.push([15515.5, 50.2668838, 1.02767568, 0.962592296]);data.push([16516.5, 47.3910021, 0.667120975, 0.561639899]);data.push([17517.5, 43.2638165, 0.441503333, 0.414594459]);data.push([18518.5, 42.3992465, 0.370183093, 0.474811844]);data.push([19519.5, 44.6782348, 0.2283158442, 0.343208476]);data.push([20520.5, 43.4463681, 0.2588691202, 0.2164614104]);data.push([21521.5, 43.7732535, 0.2413472159, 0.179825774]);data.push([22522.5, 40.318318, 0.42762151, 0.341507743]);data.push([23523.5, 45.6092882, 0.2318866235, 0.2012618098]);data.push([24524.5, 46.5543985, 0.0865023786, 0.07995905726]);data.push([25525.5, 42.9487898, 0.04440477038, 0.04921140133]);data.push([26526.5, 42.7169709, 0.1956618892, 0.1269015327]);data.push([27527.5, 43.0663101, 0.329355477, 0.2179327656]);data.push([28528.5, 40.1874721, 0.15989133895, 0.1282990675]);data.push([29529.5, 42.2832283, 0.2112736154, 0.1822294898]);data.push([30530.5, 40.9891416, 0.2252694663, 0.2266565032]);data.push([31531.5, 41.3143803, 0.0771864641, 0.079134175]);data.push([32532.5, 39.2448839, 0.1051183739, 0.1155034352]);data.push([33533.5, 37.2758411, 0.1774406945, 0.1567847489]);data.push([34534.5, 39.7531088, 0.1369578752, 0.1409037011]);data.push([35535.5, 38.4928317, 0.119811959, 0.1205545799]);data.push([36536.5, 40.5486277, 0.0929148023, 0.090396123]);data.push([37537.5, 39.6813952, 0.0641488323, 0.0592727451]);data.push([38538.5, 40.7915891, 0.1071930372, 0.134839694]);data.push([39539.5, 42.2787354, 0.240750645, 0.39024337]);data.push([40540.5, 41.7870627, 0.420780584, 0.463406515]);data.push([41541.5, 40.0912176, 0.1905312491, 0.1799174238]);data.push([42542.5, 41.3765589, 0.1228508652, 0.1031810594]);data.push([43543.5, 41.5532637, 0.2713092784, 0.1679536025]);data.push([44544.5, 42.3843663, 0.2342345554, 0.1990431405]);data.push([45545.5, 45.0166696, 0.1210250422, 0.1095033186]);data.push([46546.5, 39.3560782, 0.1559933733, 0.0849632117]);data.push([47547.5, 34.8331129, 0.194045398, 0.0779791591]);data.push([48548.5, 39.244253, 0.1827976209, 0.1268535497]);data.push([49549.5, 33.7184302, 0.1300120547, 0.1350691025]);data.push([50550.5, 32.6661476, 0.0827914, 0.0902567575]);data.push([51551.5, 33.0667728, 0.1347584226, 0.1032795526]);data.push([52552.5, 28.4451582, 0.2061086587, 0.1784497989]);data.push([53553.5, 30.9715209, 0.427163554, 0.384415191]);data.push([54554.5, 33.3772834, 0.39663622, 0.378564926]);data.push([55555.5, 37.5785537, 0.455051024, 0.353715664]);data.push([56556.5, 36.5462934, 0.542150914, 0.484979253]);data.push([57557.5, 39.7591167, 0.249280733, 0.2095409755]);data.push([58558.5, 41.1338324, 0.1734187753, 0.1709930465]);data.push([59559.5, 40.4085824, 0.2288522898, 0.242222039]);data.push([60560.5, 39.2516127, 0.278778621, 0.222514378]);data.push([61561.5, 36.9103169, 0.435602664, 0.268246563]);data.push([62562.5, 34.1383411, 0.428962129, 0.388348407]);data.push([63563.5, 33.4529655, 0.1447552942, 0.191718149]);data.push([64564.5, 30.4259962, 0.0702818043, 0.1029093635]);data.push([65565.5, 31.9791222, 0.1222605086, 0.1224882432]);data.push([66566.5, 31.1958355, 0.1102176836, 0.1114571984]);data.push([67567.5, 34.3552304, 0.0748544779, 0.0714981546]);data.push([68568.5, 35.5246364, 0.2236659094, 0.250200782]);data.push([69569.5, 38.8184133, 0.2800216262, 0.2570514481]);data.push([70570.5, 34.872193, 0.1666773168, 0.1296719453]);data.push([71571.5, 33.0068875, 0.0861981186, 0.0861948156]);data.push([72572.5, 33.5827077, 0.0707962469, 0.0692958591]);data.push([73573.5, 35.3858052, 0.1611582838, 0.1508142621]);data.push([74574.5, 29.3126064, 0.0850187736, 0.0798163954]);data.push([75575.5, 31.9085757, 0.1566389278, 0.165129518]);data.push([76576.5, 32.0946466, 0.0793879312, 0.108924274]);data.push([77577.5, 34.1098345, 0.1327880941, 0.1774773126]);data.push([78578.5, 31.1506905, 0.134374725, 0.11499025]);data.push([79579.5, 28.7375767, 0.1499128625, 0.1356452225]);data.push([80580.5, 28.1503407, 0.2094632224, 0.1995100604]);data.push([81581.5, 28.1050071, 0.1543079395, 0.1420408217]);data.push([82582.5, 30.7516419, 0.150829918, 0.09674716204]);data.push([83583.5, 32.279586, 0.0552908394, 0.05098210899]);data.push([84584.5, 30.7313089, 0.04831126237, 0.063153372]);data.push([85585.5, 28.1890265, 0.0952041185, 0.101784345]);data.push([86586.5, 25.965637, 0.04730446793, 0.03584227582]);data.push([87587.5, 23.1305614, 0.07990140629, 0.06868204225]);data.push([88588.5, 22.3750874, 0.03172432587, 0.026265732062]);data.push([89589.5, 19.8771425, 0.009909814844, 0.009997285002]);data.push([90590.5, 22.6291359, 0.007707306804, 0.008351945523]);data.push([91591.5, 23.3584463, 0.01663754239, 0.01752385064]);data.push([92592.5, 23.619155, 0.01375092574, 0.01989739692]);data.push([93593.5, 25.5156405, 0.0516410532, 0.04964006713]);data.push([94594.5, 27.6629822, 0.0985205752, 0.0941718019]);data.push([95595.5, 27.8913645, 0.04718074985, 0.04833493964]);data.push([96596.5, 31.2699265, 0.04989725046, 0.05389189517]);data.push([97597.5, 32.4846555, 0.04329500324, 0.0420356604]);data.push([98598.5, 34.9354189, 0.02897642521, 0.029395890798]);data.push([99599.5, 33.6575523, 0.02012816358, 0.02301910769]);data.push([100600.5, 33.4961724, 0.03417543274, 0.02535104548]);data.push([101601.5, 34.8388976, 0.086531639, 0.09904159877]);data.push([102602.5, 37.324271, 0.1542875122, 0.1258207501]);data.push([103603.5, 33.8623739, 0.2038218142, 0.1184661578]);data.push([104604.5, 36.8386181, 0.2342749112, 0.2073677179]);data.push([105605.5, 40.940262, 0.2186355274, 0.1987508973]);data.push([106606.5, 41.9315013, 0.254517962, 0.2096423193]);data.push([107607.5, 39.446252, 0.25805247, 0.1724716662]);data.push([108608.5, 34.5371161, 0.32526595, 0.1725615928]);data.push([109609.5, 31.0518506, 0.1750110687, 0.1241987835]);data.push([110610.5, 32.5648858, 0.1149392662, 0.0862785347]);data.push([111611.5, 32.3048802, 0.0554253304, 0.0466051367]);data.push([112612.5, 30.8444751, 0.1569332473, 0.0947973244]);data.push([113613.5, 28.1655329, 0.0839509954, 0.0705750264]);data.push([114614.5, 30.2116913, 0.0515986904, 0.0537283277]);data.push([115615.5, 25.0376175, 0.02015219852, 0.02139405107]);data.push([116616.5, 25.4212239, 0.02789708742, 0.01390857905]);data.push([117617.5, 27.4113548, 0.06772058945, 0.03789367737]);data.push([118618.5, 27.9665425, 0.02826776095, 0.04207985308]);data.push([119619.5, 30.8364077, 0.0626028941, 0.06414546892]);data.push([120620.5, 31.0533547, 0.016300158109, 0.019413028678]);data.push([121621.5, 29.5125225, 0.01697602428, 0.01900863989]);data.push([122622.5, 27.3207641, 0.057013587, 0.039978434]);data.push([123623.5, 28.9981383, 0.04178009693, 0.03841639742]);data.push([124624.5, 28.7850136, 0.03863857541, 0.03221281373]);data.push([125625.5, 29.055647, 0.1084320542, 0.1180430208]);data.push([126626.5, 28.7008708, 0.1440062179, 0.1136879021]);data.push([127627.5, 30.9690232, 0.1010025534, 0.0878120755]);data.push([128628.5, 30.1963409, 0.099153378, 0.0901267841]);data.push([129629.5, 32.6411909, 0.0553211666, 0.05949592874]);data.push([130630.5, 30.5518326, 0.068782908, 0.0812209013]);data.push([131631.5, 29.7680151, 0.0579931282, 0.0641440914]);data.push([132632.5, 33.5462271, 0.1303455007, 0.1272344531]);data.push([133633.5, 32.9737897, 0.0408510849, 0.04586691717]);data.push([134634.5, 34.5849644, 0.04377806585, 0.0583754471]);data.push([135635.5, 37.4147259, 0.0377288698, 0.04144557606]);data.push([136636.5, 32.6271272, 0.03583058505, 0.03463645493]);data.push([137637.5, 29.061028, 0.0406737132, 0.0454627573]);data.push([138638.5, 30.3834074, 0.0730710963, 0.0603499243]);data.push([139639.5, 30.387707, 0.1058155076, 0.076925612]);data.push([140640.5, 34.1352794, 0.0988745127, 0.0840481438]);data.push([141641.5, 35.4875836, 0.0412597754, 0.0434406656]);data.push([142642.5, 37.7936858, 0.0858533904, 0.0768830622]);data.push([143643.5, 40.755839, 0.1039974287, 0.063590851]);data.push([144644.5, 44.5725456, 0.1521562073, 0.1604546105]);data.push([145645.5, 40.4156051, 0.2827653816, 0.352144187]);data.push([146646.5, 41.3849321, 0.171921372, 0.176455943]);data.push([147647.5, 38.7584619, 0.0834024614, 0.096083495]);data.push([148648.5, 34.4265174, 0.028602445255, 0.043115288993]);data.push([149649.5, 31.1660438, 0.005704594441, 0.005110529435]);data.push([150650.5, 31.1970694, 0.00614619133, 0.004269056043]);data.push([151651.5, 33.5884359, 0.010036893928, 0.012656581246]);data.push([152652.5, 30.3605222, 0.01204877648, 0.0233941354]);data.push([153653.5, 30.6353178, 0.0336801096, 0.0521693106]);data.push([154654.5, 31.4759935, 0.04659736064, 0.037587947]);data.push([155655.5, 28.3864476, 0.0787487176, 0.0514849169]);data.push([156656.5, 28.2910085, 0.01590128343, 0.02628057871]);data.push([157657.5, 29.6902436, 0.021171970384, 0.02702677354]);data.push([158658.5, 31.0441842, 0.0779239453, 0.0718609364]);data.push([159659.5, 32.7570091, 0.1061459927, 0.0889482686]);data.push([160660.5, 32.6594208, 0.06450861587, 0.047724805]);data.push([161661.5, 37.2123477, 0.057543406, 0.05143202204]);data.push([162662.5, 36.5442482, 0.0711284199, 0.06685014486]);data.push([163663.5, 36.0827705, 0.1059655895, 0.1051306602]);data.push([164664.5, 36.20717, 0.0904840323, 0.0670906625]);data.push([165665.5, 34.3593508, 0.0569474956, 0.05523446676]);data.push([166666.5, 33.1670206, 0.03949100325, 0.04775766811]);data.push([167667.5, 31.0091461, 0.03989246787, 0.0426974592]);data.push([168668.5, 30.9341519, 0.02516619298, 0.04861102932]);data.push([169669.5, 30.9822141, 0.0590746806, 0.07093393015]);data.push([170670.5, 33.9564975, 0.04707356096, 0.04444046995]);data.push([171671.5, 33.9779549, 0.0662382512, 0.07897967879]);data.push([172672.5, 35.7455386, 0.1376541947, 0.146586235]);data.push([173673.5, 37.7465259, 0.2109601716, 0.2334248303]);data.push([174674.5, 37.4889771, 0.1017995572, 0.1404276217]);data.push([175675.5, 39.7461822, 0.1078455062, 0.2478456525]);data.push([176676.5, 40.0323783, 0.2395159895, 0.44590703]);data.push([177677.5, 37.4319044, 0.2778812733, 0.442989502]);data.push([178678.5, 38.4567709, 0.3325383949, 0.379426159]);data.push([179679.5, 33.5809883, 0.2346306185, 0.2095557318]);data.push([180680.5, 35.2775166, 0.380062612, 0.309497804]);data.push([181681.5, 32.8411327, 0.328162862, 0.288807287]);data.push([182682.5, 32.994027, 0.2775008647, 0.1560974583]);data.push([183683.5, 30.3236439, 0.08190969558, 0.0455803629]);data.push([184684.5, 29.0208341, 0.0786100856, 0.05664790828]);data.push([185685.5, 29.8481447, 0.09857456809, 0.1163251624]);data.push([186686.5, 32.9418587, 0.1852672046, 0.2011132458]);data.push([187687.5, 34.4790578, 0.1331497095, 0.217769032]);data.push([188688.5, 31.460855, 0.1844128029, 0.1972863136]);data.push([189689.5, 31.0929912, 0.06072134018, 0.062622074]);data.push([190690.5, 33.8427446, 0.042503329619, 0.0652975356]);data.push([191691.5, 32.1204597, 0.0451100401, 0.04867412018]);data.push([192692.5, 33.168745, 0.1106452359, 0.1049362985]);data.push([193693.5, 33.8115134, 0.0828493747, 0.0855874618]);data.push([194694.5, 36.3043887, 0.0306021015, 0.0345090993]);data.push([195695.5, 35.5289044, 0.0408237518, 0.0505100739]);data.push([196696.5, 34.8708552, 0.0715688428, 0.03846886695]);data.push([197697.5, 35.2713122, 0.1345954159, 0.0681166099]);data.push([198698.5, 37.2335753, 0.0714525692, 0.1011031289]);data.push([199699.5, 39.7433237, 0.2754655847, 0.402601847]);data.push([200700.5, 38.4292623, 0.412983668, 0.516170488]);data.push([201701.5, 39.1436984, 0.2332918024, 0.2240987863]);data.push([202702.5, 36.3748454, 0.1171339472, 0.083447316]);data.push([203703.5, 34.8301307, 0.1896922787, 0.092284553]);data.push([204704.5, 34.8578433, 0.06723518151, 0.05746102946]);data.push([205705.5, 36.7796036, 0.0779533125, 0.0749272522]);data.push([206706.5, 30.6727694, 0.1691854287, 0.1505342855]);data.push([207707.5, 27.864051, 0.0822314903, 0.0912638058]);data.push([208708.5, 29.4330013, 0.02084165793, 0.010801777829]);data.push([209709.5, 29.6352661, 0.03184868803, 0.039008614152]);data.push([210710.5, 29.7039266, 0.04036892423, 0.0320231861]);data.push([211711.5, 28.7836741, 0.02874192803, 0.0393756882]);data.push([212712.5, 28.6026036, 0.0487275258, 0.06275101462]);data.push([213713.5, 28.8058125, 0.0418797238, 0.0852055253]);data.push([214714.5, 30.870819, 0.03892214168, 0.049902532]);data.push([215715.5, 31.9216338, 0.0523580091, 0.0496495712]);data.push([216716.5, 30.2882611, 0.0976986989, 0.0709043103]);data.push([217717.5, 30.3926703, 0.22957983, 0.1759767609]);data.push([218718.5, 30.2418394, 0.1452678931, 0.1426418602]);data.push([219719.5, 31.9307668, 0.1114797727, 0.1188461523]);data.push([220720.5, 30.1644341, 0.0746015419, 0.07796035]);data.push([221721.5, 33.174027, 0.2084375777, 0.2101767339]);data.push([222722.5, 30.6821019, 0.2526717929, 0.298224156]);data.push([223723.5, 30.5642454, 0.151688744, 0.1988380633]);data.push([224724.5, 29.254766, 0.04007487004, 0.0510655398]);data.push([225725.5, 31.2123079, 0.0531164152, 0.0493343655]);data.push([226726.5, 40.506135, 0.0555341188, 0.0407128004]);data.push([227727.5, 42.403973, 0.0657255924, 0.072944549]);data.push([228728.5, 36.8382606, 0.0370609027, 0.063768897]);data.push([229729.5, 31.2105394, 0.0834644792, 0.0897144905]);data.push([230730.5, 29.6799653, 0.172443114, 0.1835756687]);data.push([231731.5, 28.552027, 0.2347521364, 0.229602739]);data.push([232732.5, 26.9424152, 0.3005377198, 0.3344411316]);data.push([233733.5, 26.9033275, 0.3528305839, 0.204810379]);data.push([234734.5, 27.7371694, 0.407777462, 0.2459126435]);data.push([235735.5, 25.998539, 0.4008613975, 0.2383546534]);data.push([236736.5, 24.2789698, 0.2557651868, 0.1945306276]);data.push([237737.5, 27.4077713, 0.05013521269, 0.04702383482]);data.push([238738.5, 28.6818478, 0.06691055285, 0.06276680055]);data.push([239739.5, 27.6668282, 0.0458956464, 0.04519672279]);data.push([240740.5, 31.0468061, 0.04260403081, 0.05339657865]);data.push([241741.5, 29.0837233, 0.036921631604, 0.046142169224]);data.push([242742.5, 26.5874486, 0.03283920347, 0.02881060699]);data.push([243743.5, 28.6762391, 0.09457764754, 0.0687108624]);data.push([244744.5, 31.9845388, 0.05455241891, 0.0482103137]);data.push([245745.5, 30.3602825, 0.0183281028, 0.022136430559]);data.push([246746.5, 29.8457758, 0.0335119762, 0.03933802172]);data.push([247747.5, 29.5741726, 0.05004098817, 0.06070696785]);data.push([248748.5, 31.7145772, 0.0932606646, 0.0749200237]);data.push([249749.5, 32.9869959, 0.1509503454, 0.1418171629]);data.push([250750.5, 30.6016656, 0.1258248553, 0.1403170132]);data.push([251751.5, 28.948272, 0.1246624046, 0.1236192194]);data.push([252752.5, 28.7951951, 0.08274797381, 0.0684103326]);data.push([253753.5, 31.1390632, 0.05787667889, 0.05381493348]);data.push([254754.5, 34.7255704, 0.0722769476, 0.0754360566]);data.push([255755.5, 32.4990315, 0.04109628041, 0.0384854255]);data.push([256756.5, 29.5815382, 0.04356015554, 0.059148846]);data.push([257757.5, 27.1461596, 0.04584409045, 0.0396915239]);data.push([258758.5, 26.2875944, 0.04613026702, 0.03615205314]);data.push([259759.5, 29.9066965, 0.04568748112, 0.04810751928]);data.push([260760.5, 29.0977663, 0.1266300258, 0.106136899]);data.push([261761.5, 27.5854543, 0.0983743639, 0.1223548617]);data.push([262762.5, 24.7547193, 0.1416137116, 0.1386373884]);data.push([263763.5, 22.2339835, 0.1716819793, 0.1409682951]);data.push([264764.5, 24.0361043, 0.334721715, 0.314250293]);data.push([265765.5, 26.3430739, 0.448869856, 0.378789909]);data.push([266766.5, 27.5958951, 0.33624793, 0.295558217]);data.push([267767.5, 26.4837109, 0.2786592014, 0.2956822005]);data.push([268768.5, 25.4807917, 0.2331885513, 0.1933827311]);data.push([269769.5, 28.1188689, 0.1271011171, 0.1224594013]);data.push([270770.5, 27.4699528, 0.1307331386, 0.1346714764]);data.push([271771.5, 27.5502986, 0.1534338323, 0.1865082843]);data.push([272772.5, 27.486916, 0.1253500296, 0.1129055275]);data.push([273773.5, 27.7162589, 0.1276290432, 0.1338331351]);data.push([274774.5, 23.9004479, 0.20514836, 0.209068972]);data.push([275775.5, 22.6117376, 0.2089235559, 0.18012141]);data.push([276776.5, 23.6143044, 0.0966069723, 0.1198903384]);data.push([277777.5, 22.7386784, 0.0916860485, 0.0764250262]);data.push([278778.5, 24.7711266, 0.0651649078, 0.03487629454]);data.push([279779.5, 23.9544578, 0.02840987693, 0.02899355131]);data.push([280780.5, 24.2296384, 0.02282769228, 0.021025733944]);data.push([281781.5, 27.8900861, 0.1698159642, 0.176698734]);data.push([282782.5, 26.3627609, 0.0830226743, 0.0998071832]);data.push([283783.5, 25.4019433, 0.0596066238, 0.0616003575]);data.push([284784.5, 26.3840754, 0.0685609137, 0.0827975491]);data.push([285785.5, 29.1647201, 0.063391939, 0.0659991154]);data.push([286786.5, 27.1484664, 0.02837984687, 0.02969708346]);data.push([287787.5, 26.8221154, 0.10172051838, 0.1023486856]);data.push([288788.5, 24.7690305, 0.0972892982, 0.0736134736]);data.push([289789.5, 25.3413132, 0.0821708383, 0.0673465489]);data.push([290790.5, 30.8057258, 0.1374663506, 0.1425518754]);data.push([291791.5, 29.7408806, 0.1537278805, 0.1489292682]);data.push([292792.5, 28.5525395, 0.1366204767, 0.1275634403]);data.push([293793.5, 30.5238076, 0.0661766394, 0.0813416316]);data.push([294794.5, 31.0614686, 0.0837286095, 0.0853199411]);data.push([295795.5, 28.3996358, 0.0547937961, 0.05001558804]);data.push([296796.5, 25.3057378, 0.1019092731, 0.0606588309]);data.push([297797.5, 20.3375268, 0.0733118892, 0.0643658323]);data.push([298798.5, 14.46815493, 0.1705993881, 0.1553631412]);data.push([299799.5, 20.1587357, 0.1090896015, 0.1256340453]);data.push([300800.5, 23.9924616, 0.1154424013, 0.0810124215]);data.push([301801.5, 28.3172037, 0.1402635897, 0.1383894583]);data.push([302802.5, 34.7028167, 0.391523954, 0.427191192]);data.push([303803.5, 33.2744812, 0.417732634, 0.3691120828]);data.push([304804.5, 27.8343999, 0.108676591, 0.0736642668]);data.push([305805.5, 28.1332918, 0.2050113399, 0.2099494359]);data.push([306806.5, 26.6340042, 0.1355452709, 0.1313462358]);data.push([307807.5, 24.8604773, 0.0841434626, 0.0733958718]);data.push([308808.5, 23.5818698, 0.089856069263, 0.08237304377]);data.push([309809.5, 22.9971121, 0.02791734557, 0.026124192275]);data.push([310810.5, 22.8994166, 0.02687419557, 0.02669001907]);data.push([311811.5, 24.3777235, 0.022200066527, 0.010982163835]);data.push([312812.5, 25.3862793, 0.01052429904, 0.007363495068]);data.push([313813.5, 27.3254689, 0.01873635354, 0.01736011722]);data.push([314814.5, 28.6467231, 0.0345920218, 0.02807506403]);data.push([315815.5, 29.8172271, 0.025594510846, 0.02962736176]);data.push([316816.5, 33.5312887, 0.015838870507, 0.016748174971]);data.push([317817.5, 35.9607879, 0.0581813764, 0.0548499609]);data.push([318818.5, 34.9391532, 0.1588491658, 0.1324220844]);data.push([319819.5, 32.2184012, 0.1613140782, 0.1538088025]);data.push([320820.5, 32.232321, 0.436318798, 0.436228936]);data.push([321821.5, 32.0419648, 0.2223392271, 0.229599762]);data.push([322822.5, 34.324185, 0.1702539744, 0.2125405282]);data.push([323823.5, 36.9002179, 0.05607254121, 0.0557829238]);data.push([324824.5, 35.0379628, 0.107276655, 0.1009360962]);data.push([325825.5, 29.664662, 0.1771080792, 0.1599396497]);data.push([326826.5, 23.5948609, 0.1133385861, 0.1088311361]);data.push([327827.5, 20.3264848, 0.03144914294, 0.025774766802]);data.push([328828.5, 18.5299581, 0.018120233466, 0.01020160773]);data.push([329829.5, 18.8910152, 0.008729273334, 0.008982139061]);data.push([330830.5, 21.6379987, 0.010240095786, 0.005966246664]);data.push([331831.5, 21.3704301, 0.006672980053, 0.005194273666]);data.push([332832.5, 23.9777682, 0.01070108824, 0.011547955836]);data.push([333833.5, 26.6160287, 0.005719106197, 0.004752876203]);data.push([334834.5, 22.8620701, 0.00448848365, 0.001751889211]);data.push([335835.5, 21.1554889, 0.007166644198, 0.007536012026]);data.push([336836.5, 23.7886114, 0.002021962151, 0.001618408155]);data.push([337837.5, 21.4855805, 0.016315903434, 0.014806433464]);data.push([338838.5, 20.2317051, 0.010821192264, 0.009218909194]);data.push([339839.5, 20.6021701, 0.01287540988, 0.013324280231]);data.push([340840.5, 18.0808671, 0.014121476535, 0.014652220298]);data.push([341841.5, 15.444329, 0.02778125182, 0.02793905481]);data.push([342842.5, 17.0247815, 0.05774995254, 0.05768040091]);data.push([343843.5, 18.5407643, 0.01199143718, 0.019413171]);data.push([344844.5, 22.1229251, 0.005540329709, 0.005550456582]);data.push([345845.5, 19.4891519, 0.005007608939, 0.004974710061]);data.push([346846.5, 18.9217688, 0.04970197235, 0.03850077959]);data.push([347847.5, 17.6348372, 0.007625268771, 0.007578898392]);data.push([348848.5, 13.63993218, 0.000878830935, 0.000776791367]);data.push([349849.5, 10.93773257, 0.001813267796, 0.002389744459]);data.push([350850.5, 11.62583674, 0.01745285014, 0.02319763696]);data.push([351851.5, 12.9286434, 0.075320172, 0.0799143712]);data.push([352852.5, 14.2175139, 0.0991592908, 0.1195122895]);data.push([353853.5, 16.1496784, 0.1191233499, 0.1082290264]);data.push([354854.5, 16.874491, 0.049824494179, 0.046154609522]);data.push([355855.5, 20.2120094, 0.018680328009, 0.006414459533]);data.push([356856.5, 21.6936493, 0.03328211437, 0.01322284609]);data.push([357857.5, 20.6742827, 0.02928999637, 0.01331537811]);data.push([358858.5, 23.0808354, 0.0554237025, 0.03716633081]);data.push([359859.5, 22.3804287, 0.022239582473, 0.01522998832]);data.push([360860.5, 25.918385, 0.030061562694, 0.0305633801]);data.push([361861.5, 24.7427914, 0.0774371509, 0.081403453]);data.push([362862.5, 25.5017297, 0.1014010023, 0.0981156258]);data.push([363863.5, 30.6807239, 0.1903952065, 0.2094601009]);data.push([364864.5, 28.3428006, 0.155315698, 0.1639253831]);data.push([365865.5, 29.5695067, 0.1308612372, 0.0924805574]);data.push([366866.5, 31.3888635, 0.05188933397, 0.0528570422]);data.push([367867.5, 27.8485865, 0.03486183061, 0.04116000575]);data.push([368868.5, 33.0680096, 0.0746821487, 0.0733689418]);data.push([369869.5, 32.8886995, 0.05906424167, 0.0766316091]);data.push([370870.5, 33.1746687, 0.05180865704, 0.0814458976]);data.push([371871.5, 32.7521261, 0.03875246947, 0.0413505387]);data.push([372872.5, 30.4992913, 0.0405680368, 0.04290902141]);data.push([373873.5, 34.095684, 0.0573037134, 0.0621785326]);data.push([374874.5, 36.1445369, 0.02346029085, 0.0229361153]);data.push([375875.5, 37.1435594, 0.02684697062, 0.024281624745]);data.push([376876.5, 37.1663389, 0.03551506281, 0.03730600434]);data.push([377877.5, 35.3850422, 0.0741279642, 0.0746238035]);data.push([378878.5, 35.5118821, 0.0624701197, 0.06190515687]);data.push([379879.5, 35.2090613, 0.1502425891, 0.1433238286]);data.push([380880.5, 31.629936, 0.048212796121, 0.02939988591]);data.push([381881.5, 32.7020755, 0.04638783473, 0.05623720528]);data.push([382882.5, 34.5052125, 0.0609553869, 0.0659838444]);data.push([383883.5, 33.3174784, 0.1563238175, 0.1679256782]);data.push([384884.5, 32.4667508, 0.1204602912, 0.1266322296]);data.push([385885.5, 31.447481, 0.01879755227, 0.03097878124]);data.push([386886.5, 33.6968978, 0.03789919434, 0.04663280615]);data.push([387887.5, 33.6472869, 0.03673264577, 0.0887429073]);data.push([388888.5, 27.424733, 0.121034039, 0.1149385654]);data.push([389889.5, 27.7038823, 0.094176851, 0.0771453221]);data.push([390890.5, 28.7503903, 0.0609665656, 0.0638352582]);data.push([391891.5, 30.3550024, 0.2388305225, 0.1527617466]);data.push([392892.5, 28.7178715, 0.0814645158, 0.0751053974]);data.push([393893.5, 24.7002733, 0.1415215614, 0.1149529256]);data.push([394894.5, 23.3812988, 0.244696205, 0.260867802]);data.push([395895.5, 23.189704, 0.237227894, 0.250026211]);data.push([396896.5, 22.0520561, 0.1872888538, 0.1480403408]);data.push([397897.5, 23.9614531, 0.2298412187, 0.2299911593]);data.push([398898.5, 25.8178397, 0.288042828, 0.320073297]);data.push([399899.5, 27.3636715, 0.248151521, 0.278376336]);data.push([400900.5, 26.2496423, 0.1559150571, 0.1711526787]);data.push([401901.5, 29.4299394, 0.105852365, 0.1111180965]);data.push([402902.5, 32.4105034, 0.0638392448, 0.04779705938]);data.push([403903.5, 35.1485434, 0.0975772489, 0.1102048261]);data.push([404904.5, 36.2428932, 0.07818088473, 0.0740471965]);data.push([405905.5, 40.7999255, 0.1317804687, 0.0667913569]);data.push([406906.5, 38.5435309, 0.1252046314, 0.0889830379]);data.push([407907.5, 36.4511992, 0.04169052006, 0.04123756308]);data.push([408908.5, 34.7029583, 0.0699605742, 0.06504983873]);data.push([409909.5, 36.4711711, 0.0711498815, 0.0919596504]);data.push([410910.5, 35.4727269, 0.06915114294, 0.066262096]);data.push([411911.5, 35.5398087, 0.04362919587, 0.0686507021]);data.push([412912.5, 36.893888, 0.012407231739, 0.02019969744]);data.push([413913.5, 35.4871746, 0.011133452599, 0.015614655499]);data.push([414914.5, 29.9537288, 0.0366907383, 0.02889538545]);data.push([415915.5, 28.4223824, 0.03443104842, 0.030197548069]);data.push([416916.5, 26.7833147, 0.04673565221, 0.05093350109]);data.push([417917.5, 29.5005927, 0.0961659172, 0.1235309005]);data.push([418918.5, 27.8491881, 0.1673096754, 0.2348509622]);data.push([419919.5, 29.7187209, 0.1597968817, 0.1521919837]);data.push([420920.5, 32.1802282, 0.1782679234, 0.1390102419]);data.push([421921.5, 33.4614897, 0.1113082833, 0.0883627335]);data.push([422922.5, 35.2353535, 0.0666516192, 0.0749498133]);data.push([423923.5, 31.1464697, 0.0759663883, 0.093820106]);data.push([424924.5, 31.4057897, 0.0903392978, 0.0978799475]);data.push([425925.5, 37.7746603, 0.0635200075, 0.0473544303]);data.push([426926.5, 36.6445367, 0.1020802881, 0.0777965746]);data.push([427927.5, 31.3964916, 0.0874979271, 0.0865835698]);data.push([428928.5, 27.6204347, 0.0721510676, 0.0638192669]);data.push([429929.5, 26.9484219, 0.0623926029, 0.0433001736]);data.push([430930.5, 28.4390665, 0.06635815027, 0.08068439285]);data.push([431931.5, 28.5646799, 0.0497544935, 0.0510888404]);data.push([432932.5, 27.1244253, 0.0414934331, 0.0391693204]);data.push([433933.5, 29.8639311, 0.0607634756, 0.0686460288]);data.push([434934.5, 30.1421546, 0.1015712399, 0.0907830592]);data.push([435935.5, 30.1318305, 0.1044834842, 0.1166189287]);data.push([436936.5, 29.5911579, 0.0722111881, 0.0922528958]);data.push([437937.5, 28.1032469, 0.1542039449, 0.2087947874]);data.push([438938.5, 28.3849975, 0.1551039494, 0.1574161185]);data.push([439939.5, 32.2903263, 0.222946157, 0.2124753729]);data.push([440940.5, 31.0731742, 0.1093426532, 0.1407096107]);data.push([441941.5, 28.5055019, 0.0941918476, 0.1219141454]);data.push([442942.5, 28.772724, 0.0799996616, 0.074306611]);data.push([443943.5, 28.6311606, 0.0540081947, 0.0590612782]);data.push([444944.5, 28.1515874, 0.0913621376, 0.0865870996]);data.push([445945.5, 27.5322267, 0.192306877, 0.1540191834]);data.push([446946.5, 25.1505429, 0.1757391741, 0.1645933083]);data.push([447947.5, 23.3370554, 0.0512747419, 0.0492322166]);data.push([448948.5, 23.8671539, 0.113185713, 0.0594276066]);data.push([449949.5, 23.2909693, 0.0750140359, 0.0727580545]);data.push([450950.5, 24.8102944, 0.02956901194, 0.03518026954]);data.push([451951.5, 24.5344289, 0.0333732276, 0.02917766906]);data.push([452952.5, 26.6290498, 0.0494300099, 0.0536439099]);data.push([453953.5, 28.8528041, 0.0947246955, 0.1020297304]);data.push([454954.5, 28.821124, 0.251288664, 0.223115403]);data.push([455955.5, 26.6323618, 0.260806543, 0.249367723]);data.push([456956.5, 27.589508, 0.374446064, 0.348003735]);data.push([457957.5, 27.0563594, 0.241261384, 0.1062914673]);data.push([458958.5, 29.0550445, 0.1257108471, 0.1042733234]);data.push([459959.5, 28.8947469, 0.1331845221, 0.1229826277]);data.push([460960.5, 29.4597559, 0.117269518, 0.1149014458]);data.push([461961.5, 28.875125, 0.1554074498, 0.1499377593]);data.push([462962.5, 30.7022144, 0.1552065696, 0.1859957883]);data.push([463963.5, 28.1695951, 0.1203938418, 0.1458652545]);data.push([464964.5, 26.2755483, 0.0945329437, 0.1002998464]);data.push([465965.5, 27.6869661, 0.1322411997, 0.0991684145]);data.push([466966.5, 25.2241211, 0.1805923344, 0.1931674219]);data.push([467967.5, 27.3197945, 0.3551952714, 0.3678981117]);data.push([468968.5, 29.8441315, 0.349212109, 0.342713417]);data.push([469969.5, 29.93702, 0.2334213043, 0.1990449396]);data.push([470970.5, 30.7108903, 0.0550453077, 0.0593167929]);data.push([471971.5, 30.885907, 0.1018712457, 0.0924900935]);data.push([472972.5, 26.5755862, 0.1137600231, 0.1349147687]);data.push([473973.5, 22.780226, 0.0879793742, 0.0819805869]);data.push([474974.5, 24.5239337, 0.0765948428, 0.0666838939]);data.push([475975.5, 28.7160491, 0.0609098272, 0.0656967627]);data.push([476976.5, 31.3358088, 0.1735277772, 0.1815556805]);data.push([477977.5, 32.7344595, 0.194602785, 0.1829895629]);data.push([478978.5, 35.512002, 0.374077745, 0.354633896]);data.push([479979.5, 36.2545453, 0.315946114, 0.318194886]);data.push([480980.5, 36.3107293, 0.2527117507, 0.2640239715]);data.push([481981.5, 34.5199924, 0.1683358028, 0.1904080288]);data.push([482982.5, 35.4266292, 0.12015729984, 0.11443445166]);data.push([483983.5, 34.1630474, 0.1580035552, 0.1784721267]);data.push([484984.5, 30.1496071, 0.0751752518, 0.1084700708]);data.push([485985.5, 33.6716075, 0.03719634704, 0.02485296903]);data.push([486986.5, 34.9409068, 0.1090084053, 0.0920013709]);data.push([487987.5, 33.0313491, 0.1033763919, 0.1028909085]);data.push([488988.5, 34.1771654, 0.0840958421, 0.0970650397]);data.push([489989.5, 32.8299437, 0.0593405991, 0.06540581259]);data.push([490990.5, 33.8670764, 0.0590914241, 0.0496089697]);data.push([491991.5, 34.6630994, 0.0987025505, 0.0879204489]);data.push([492992.5, 34.963332, 0.0981158827, 0.0713097576]);data.push([493993.5, 32.0555143, 0.0963699609, 0.0630445717]);data.push([494994.5, 31.9721268, 0.1578066162, 0.164221586]);data.push([495995.5, 30.9350907, 0.1329488891, 0.0880698612]);data.push([496996.5, 30.0904601, 0.2004958615, 0.0959654246]);data.push([497997.5, 32.8623374, 0.1592071129, 0.0986399602]);data.push([498998.5, 27.6827931, 0.1754231006, 0.1586842899]);
mean_genome_structure_4 = new Dygraph(
document.getElementById("mean_nb_enhancers_operators_div"),
data,
{
title: 'Number of enhancers and operators',
xlabel: 'Simulation time',
ylabel: 'Number of sites',
labels: ['t', 'nb_functional_regions', 'nb_enhancers', 'nb_operators'],
fillGraph: true,
legend: 'always',
labelsDivStyles: { 'textAlign': 'right' },
animatedZooms: true}
);
