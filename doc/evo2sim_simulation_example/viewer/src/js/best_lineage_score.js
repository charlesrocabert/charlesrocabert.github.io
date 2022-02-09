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
data.push([95.8181818182, 0.406885163636, 0.858930363636, 0.8868584]);data.push([179.145454545, 0.703241981818, 1.4407772, 1.58511490909]);data.push([266.872727273, 0.731799272727, 1.43876061818, 1.51462712727]);data.push([350.854545455, 0.813059327273, 1.58905763636, 1.66258805455]);data.push([430.290909091, 0.865282072727, 1.74837989091, 1.8613328]);data.push([515.327272727, 0.949881127273, 1.94041321818, 2.02008670909]);data.push([601.672727273, 0.925919509091, 2.00216690909, 2.18395667273]);data.push([691.018181818, 0.970463436364, 1.96546329091, 2.08736381818]);data.push([776.672727273, 0.890782090909, 1.90852734545, 2.05401134545]);data.push([862.290909091, 0.824414661818, 1.58436236364, 1.85783892727]);data.push([951.036363636, 0.870417163636, 1.81628054545, 2.01484896364]);data.push([1038.76363636, 1.03851874545, 2.16075507273, 2.45389156364]);data.push([1120.92727273, 1.189959, 2.3556204, 2.67662470909]);data.push([1203.78181818, 1.10154507273, 2.14022836364, 2.38769827273]);data.push([1286.58181818, 0.821745527273, 1.78171796364, 1.90108427273]);data.push([1374.87272727, 0.921502363636, 1.87337570909, 1.99766036364]);data.push([1463.85454545, 0.974246636364, 1.93508778182, 2.08598252727]);data.push([1549.67272727, 1.23415809091, 2.41561049091, 2.52914558182]);data.push([1640.94545455, 1.09531703636, 2.38690067273, 2.49729272727]);data.push([1724.49090909, 1.00511032727, 2.16819596364, 2.37782345455]);data.push([1804.63636364, 1.22101467273, 2.46959269091, 2.68261178182]);data.push([1886.14545455, 1.15602845455, 2.29080043636, 2.46923554545]);data.push([1966.70909091, 1.16654174545, 2.47979563636, 2.70199581818]);data.push([2050.43636364, 1.27259323636, 2.52996381818, 2.74091981818]);data.push([2136.4, 1.09401770909, 2.40232241818, 2.66224]);data.push([2219.6, 1.35681727273, 2.69275236364, 2.81325945455]);data.push([2311.23636364, 1.31155276364, 2.49943603636, 2.72107876364]);data.push([2400.05454545, 1.4190942, 2.82941490909, 2.91818109091]);data.push([2488.18181818, 1.61348298182, 2.98691563636, 3.22429727273]);data.push([2576.25454545, 1.42776450909, 2.82144109091, 2.93391345455]);data.push([2665.14545455, 1.30802418182, 2.77061181818, 3.05070709091]);data.push([2751.74545455, 1.42157045455, 2.80444709091, 2.93749072727]);data.push([2834.07272727, 1.31685072727, 2.69194363636, 2.98511163636]);data.push([2920.87272727, 1.45864407273, 2.81682872727, 2.96345436364]);data.push([3011.32727273, 1.46370165455, 2.89406054545, 3.06384727273]);data.push([3090.50909091, 1.4845128, 3.09445581818, 3.33491454545]);data.push([3173.43636364, 1.28895650909, 2.51035127273, 2.69259836364]);data.push([3267.09090909, 1.42456332727, 2.70814236364, 2.81883072727]);data.push([3355.90909091, 1.4641496, 2.81606714545, 3.17667896364]);data.push([3440.89090909, 1.39456487273, 2.68921409091, 2.82938990909]);data.push([3530.36363636, 1.44864634545, 2.75589272727, 2.98352090909]);data.push([3619.03636364, 1.25896303636, 2.61229132727, 2.89358945455]);data.push([3701.56363636, 1.36875974545, 2.67585527273, 2.89659236364]);data.push([3783.94545455, 1.49135290909, 3.05454345455, 3.21101509091]);data.push([3867.6, 1.44200363636, 2.98040690909, 3.27295345455]);data.push([3949.52727273, 1.64965752727, 3.28516690909, 3.41270690909]);data.push([4032.45454545, 1.66394143636, 3.31543909091, 3.509782]);data.push([4114.36363636, 1.57538014545, 3.08499909091, 3.26926363636]);data.push([4200.29090909, 1.68723581818, 3.21939163636, 3.32876745455]);data.push([4286.38181818, 1.47988781818, 2.89381563636, 3.06335927273]);data.push([4371.76363636, 1.54053561818, 3.06774854545, 3.32227363636]);data.push([4457.34545455, 1.587766, 3.05320054545, 3.18136236364]);data.push([4547.67272727, 1.49776332727, 2.83057127273, 2.95181218182]);data.push([4634.12727273, 1.59667578182, 3.06641509091, 3.23238018182]);data.push([4718.81818182, 1.59701281818, 3.12186745455, 3.26326727273]);data.push([4804.14545455, 1.67757836364, 3.21678109091, 3.37771272727]);data.push([4887.49090909, 1.7303048, 3.28964163636, 3.54371290909]);data.push([4974.23636364, 1.37487269091, 2.67333472727, 2.81995236364]);data.push([5053.85454545, 1.64397767273, 3.21847490909, 3.56365290909]);data.push([5137.2, 1.61819450909, 3.31899363636, 3.545258]);data.push([5222.98181818, 1.54746303636, 3.071862, 3.19794781818]);data.push([5305.87272727, 1.61476721818, 3.27144872727, 3.52419145455]);data.push([5385.65454545, 1.39559214545, 3.06692163636, 3.35831690909]);data.push([5467.03636364, 1.67874041818, 3.24961654545, 3.49777490909]);data.push([5548.69090909, 1.57401881818, 3.13031745455, 3.38458490909]);data.push([5632.21818182, 1.77250654545, 3.38739345455, 3.58419036364]);data.push([5718.96363636, 1.5796702, 2.99335472727, 3.29774254545]);data.push([5805.83636364, 1.72604909091, 3.36895945455, 3.52166981818]);data.push([5892.05454545, 1.63058581818, 3.15533418182, 3.24179127273]);data.push([5979.32727273, 1.73058018182, 3.46001090909, 3.56619036364]);data.push([6063.23636364, 1.94708883636, 3.67991018182, 4.00466109091]);data.push([6150.92727273, 1.76501927273, 3.44023127273, 3.58260854545]);data.push([6237.49090909, 1.83354243636, 3.45423345455, 3.62857636364]);data.push([6323.96363636, 1.75972276364, 3.38246690909, 3.66357345455]);data.push([6408.21818182, 1.78063958182, 3.39439763636, 3.68727436364]);data.push([6492.4, 1.80270490909, 3.45211036364, 3.66532163636]);data.push([6577.49090909, 1.63359901818, 3.22839, 3.40506509091]);data.push([6663.8, 1.72688207273, 3.33057036364, 3.52244709091]);data.push([6745.63636364, 1.56503009091, 3.10790690909, 3.409258]);data.push([6826.8, 1.70044709091, 3.32998327273, 3.47053818182]);data.push([6912.74545455, 1.72429709091, 3.25300545455, 3.44068527273]);data.push([7003.27272727, 1.70825341818, 3.28131927273, 3.40594]);data.push([7088.29090909, 1.80955290909, 3.43692618182, 3.73568563636]);data.push([7172.4, 1.64332236364, 3.19897890909, 3.39342163636]);data.push([7255.69090909, 1.43077492727, 2.75511454545, 2.88616472727]);data.push([7341.18181818, 1.52550776364, 2.95134727273, 3.12167963636]);data.push([7431.41818182, 1.75123205455, 3.33904127273, 3.48187072727]);data.push([7515.36363636, 1.68197316364, 3.29216927273, 3.63964381818]);data.push([7595.67272727, 1.50054558182, 2.90654181818, 3.08799236364]);data.push([7682.05454545, 1.49668556364, 2.80680854545, 2.97622109091]);data.push([7771.03636364, 1.62702161818, 3.164552, 3.333544]);data.push([7856.07272727, 1.5922036, 3.04154618182, 3.32837018182]);data.push([7938.30909091, 1.67934756364, 3.21048454545, 3.36397872727]);data.push([8020.56363636, 1.52053816364, 3.07658163636, 3.39567836364]);data.push([8106.38181818, 1.45451929091, 2.86559072727, 3.02034109091]);data.push([8195.76363636, 1.54064729091, 3.00666, 3.19797818182]);data.push([8280.36363636, 1.59091027273, 3.11996345455, 3.39196109091]);data.push([8362.05454545, 1.64249436364, 3.13353254545, 3.26990272727]);data.push([8453.07272727, 1.73598194545, 3.28724454545, 3.50773454545]);data.push([8538.63636364, 1.49476167273, 3.03741672727, 3.21542127273]);data.push([8627.54545455, 1.80067732727, 3.40250218182, 3.54971381818]);data.push([8710.74545455, 1.53564076364, 3.17881963636, 3.35428745455]);data.push([8793.83636364, 1.7033976, 3.30814090909, 3.42537018182]);data.push([8882.32727273, 1.59006247273, 3.13311690909, 3.23810181818]);data.push([8968.29090909, 1.67050281818, 3.15588872727, 3.345998]);data.push([9048.27272727, 1.6061868, 3.29126454545, 3.53864690909]);data.push([9138.0, 1.40039192727, 2.85945290909, 2.99299]);data.push([9221.63636364, 1.16445918182, 2.78131745455, 3.11692327273]);data.push([9305.10909091, 1.46855381818, 2.87713192727, 2.94431974545]);data.push([9388.81818182, 1.31458249091, 2.88615354545, 3.16059881818]);data.push([9466.87272727, 1.51819738182, 3.10067981818, 3.50072763636]);data.push([9545.96363636, 1.365355, 2.74273072727, 2.88907218182]);data.push([9632.50909091, 1.44936629091, 2.84472563636, 2.93322018182]);data.push([9718.90909091, 1.56164529091, 2.99034272727, 3.15546072727]);data.push([9800.72727273, 1.33175585455, 2.68724327273, 2.90841054545]);data.push([9888.81818182, 1.30203723636, 2.43210145455, 2.60738254545]);data.push([9980.05454545, 1.43438852727, 2.68705981818, 2.83051963636]);data.push([10063.2727273, 1.6948246, 3.24921927273, 3.45528290909]);data.push([10146.5090909, 1.45802849091, 2.84649690909, 3.07070327273]);data.push([10231.6545455, 1.67404003636, 3.27063945455, 3.37175327273]);data.push([10317.8545455, 1.47549263636, 2.98987945455, 3.10593254545]);data.push([10405.2181818, 1.63136807273, 3.20800981818, 3.36189745455]);data.push([10495.7636364, 1.57968074545, 2.99243690909, 3.21145090909]);data.push([10579.9272727, 1.54328223636, 2.90291927273, 2.99354181818]);data.push([10662.0181818, 1.5583306, 2.98381945455, 3.33445218182]);data.push([10747.0909091, 1.73018367273, 3.26466581818, 3.42946345455]);data.push([10834.2363636, 1.70219847273, 3.35465381818, 3.58207818182]);data.push([10918.9818182, 1.76522425455, 3.34654672727, 3.52683818182]);data.push([11000.4363636, 1.64646498182, 3.22056036364, 3.50330145455]);data.push([11083.7636364, 1.67895010909, 3.195952, 3.462846]);data.push([11168.9818182, 1.5870454, 2.93260581818, 3.066516]);data.push([11260.4363636, 1.5753452, 3.01701854545, 3.12414927273]);data.push([11345.8, 1.72205890909, 3.31707727273, 3.67017909091]);data.push([11431.1818182, 1.64441665455, 3.28200272727, 3.51106872727]);data.push([11516.9454545, 1.70631992727, 3.24592254545, 3.37087909091]);data.push([11599.2909091, 1.66626009091, 3.33628927273, 3.55353381818]);data.push([11684.1272727, 1.50596, 2.95734781818, 3.13689327273]);data.push([11770.7090909, 1.63923801818, 3.03998818182, 3.23883490909]);data.push([11857.4363636, 1.34298134545, 2.67706587273, 2.81425036364]);data.push([11941.2727273, 1.61554403636, 3.32173836364, 3.594002]);data.push([12024.6545455, 1.37183761818, 2.74132174545, 2.9814972]);data.push([12106.0181818, 1.37763074545, 2.81373836364, 3.01364981818]);data.push([12182.2909091, 1.26510636364, 2.72756854545, 2.90275072727]);data.push([12268.0181818, 1.40718650909, 2.88662690909, 3.04819563636]);data.push([12351.3818182, 1.6396078, 3.11850454545, 3.28507545455]);data.push([12440.4181818, 1.72505092727, 3.43722490909, 3.72067163636]);data.push([12523.4181818, 1.404436, 3.080366, 3.34414781818]);data.push([12602.0909091, 1.52501027273, 3.09748581818, 3.29492545455]);data.push([12690.4909091, 1.33677067273, 2.65811890909, 2.80676981818]);data.push([12774.8909091, 1.42082489091, 2.82143272727, 2.97568727273]);data.push([12857.2727273, 1.57149143636, 3.16309836364, 3.34671254545]);data.push([12941.2545455, 1.56208638182, 2.98086763636, 3.13022927273]);data.push([13025.5272727, 1.6189804, 3.15694781818, 3.28650618182]);data.push([13112.9272727, 1.74741865455, 3.43351618182, 3.64585345455]);data.push([13192.9636364, 1.69624376364, 3.41784672727, 3.67784618182]);data.push([13270.7454545, 1.71796567273, 3.32789363636, 3.57979981818]);data.push([13352.0, 1.57856969091, 3.18585418182, 3.51193163636]);data.push([13434.9454545, 1.48307374545, 3.06149127273, 3.28575818182]);data.push([13515.0727273, 1.67530521818, 3.20197618182, 3.46561109091]);data.push([13596.8727273, 1.48772592727, 2.92845090909, 3.09161563636]);data.push([13684.6545455, 1.41128707273, 2.70457909091, 2.86415072727]);data.push([13772.6363636, 1.47987101818, 2.91240036364, 3.119454]);data.push([13864.1454545, 1.44041416364, 2.75212345455, 2.82614545455]);data.push([13950.5090909, 1.50270012727, 3.0073594, 3.19453085455]);data.push([14036.9454545, 1.43001376364, 2.75769283636, 2.87488701818]);data.push([14130.0545455, 1.49565345455, 2.84522312727, 3.01139763636]);data.push([14214.8181818, 1.6583098, 3.10839872727, 3.381442]);data.push([14299.9818182, 1.30390470909, 2.5993306, 2.71568478182]);data.push([14387.8181818, 1.57183545455, 3.02722581818, 3.27343309091]);data.push([14469.2727273, 1.68463974545, 3.26347327273, 3.49517309091]);data.push([14554.5454545, 1.51386876364, 2.99290054545, 3.25839545455]);data.push([14637.5818182, 1.84449069091, 3.68775054545, 4.01535327273]);data.push([14720.7636364, 1.76423450909, 3.41851763636, 3.56780727273]);data.push([14804.6909091, 1.63824869091, 3.16600290909, 3.61552309091]);data.push([14892.4909091, 1.76971927273, 3.40649163636, 3.74891763636]);data.push([14973.8181818, 1.64036441818, 3.20542218182, 3.41991818182]);data.push([15059.3272727, 1.54152849091, 3.11733618182, 3.31568109091]);data.push([15139.4545455, 1.74464830909, 3.36050709091, 3.55023145455]);data.push([15227.3454545, 1.67554674545, 3.13787363636, 3.25655581818]);data.push([15315.5454545, 1.76015974545, 3.21278127273, 3.41413727273]);data.push([15402.9090909, 1.70147812727, 3.20813345455, 3.30957545455]);data.push([15482.7454545, 1.55380078182, 3.12408763636, 3.41162454545]);data.push([15563.4363636, 1.81592163636, 3.49616090909, 3.68459981818]);data.push([15647.6545455, 1.67284078182, 3.20767254545, 3.51893654545]);data.push([15728.4181818, 1.81210541818, 3.54596163636, 3.74363854545]);data.push([15814.1090909, 1.84631309091, 3.55536418182, 3.79856709091]);data.push([15899.7454545, 1.62553634545, 3.31181563636, 3.45552381818]);data.push([15985.4909091, 1.83533369091, 3.54438709091, 3.730258]);data.push([16070.8363636, 1.69310383636, 3.36566509091, 3.60233563636]);data.push([16150.9818182, 1.85664385455, 3.77345036364, 4.400858]);data.push([16234.6545455, 1.94512441818, 3.74863545455, 4.01869709091]);data.push([16321.0727273, 1.64291087273, 3.20119545455, 3.34874381818]);data.push([16407.4363636, 1.58377658182, 3.17342272727, 3.32492509091]);data.push([16489.8727273, 1.57882254545, 3.204608, 3.37149345455]);data.push([16572.0181818, 1.82519527273, 3.48475981818, 3.65540454545]);data.push([16655.1636364, 1.67761927273, 3.25424272727, 3.37908545455]);data.push([16737.6363636, 1.68309609091, 3.39172890909, 3.67290272727]);data.push([16822.6909091, 1.80028716364, 3.53813381818, 3.79244472727]);data.push([16908.5272727, 1.91695227273, 3.700816, 3.88951418182]);data.push([16998.5818182, 1.96944218182, 3.732526, 3.81432509091]);data.push([17084.5818182, 1.93986709091, 3.74099145455, 3.93866236364]);data.push([17167.4363636, 2.02590963636, 3.97437890909, 4.16088272727]);data.push([17255.1090909, 1.91680054545, 3.790176, 3.99015036364]);data.push([17338.1090909, 2.03694054545, 3.88521163636, 4.09077163636]);data.push([17424.8909091, 1.66768818182, 3.32923036364, 3.49147072727]);data.push([17513.0, 2.11709254545, 3.858046, 4.025756]);data.push([17597.4, 1.78779636364, 3.60207763636, 3.80177763636]);data.push([17684.5090909, 1.87107909091, 3.55492854545, 3.72935236364]);data.push([17768.3272727, 1.88991863636, 3.79289345455, 4.12111927273]);data.push([17850.4545455, 1.97529563636, 3.76827672727, 3.95292872727]);data.push([17934.5636364, 1.86540472727, 3.68089181818, 3.86214236364]);data.push([18019.2909091, 1.93111118182, 3.67550890909, 3.86371818182]);data.push([18100.8909091, 2.09034098182, 3.83360745455, 4.125524]);data.push([18184.0727273, 1.78521530909, 3.58250981818, 4.07672654545]);data.push([18271.5090909, 1.93397618182, 3.68851836364, 3.91128854545]);data.push([18358.2363636, 2.01414914545, 3.61753781818, 3.81109618182]);data.push([18444.4363636, 1.74622472727, 3.41639272727, 3.64244781818]);data.push([18528.8727273, 1.81177090909, 3.60554418182, 3.83659381818]);data.push([18608.8181818, 1.68822996364, 3.30599690909, 3.52811981818]);data.push([18694.4181818, 1.66758538182, 3.28439418182, 3.51078163636]);data.push([18778.8363636, 1.71998812727, 3.238828, 3.43247145455]);data.push([18868.0363636, 1.87174854545, 3.62091327273, 3.78091727273]);data.push([18951.0909091, 1.60790401818, 3.077004, 3.31761436364]);data.push([19038.6727273, 1.57177721818, 3.07342109091, 3.17518454545]);data.push([19125.3272727, 1.58590767273, 3.21214254545, 3.32558]);data.push([19208.8727273, 1.59833916364, 3.10450527273, 3.25044672727]);data.push([19296.4, 1.55450016364, 3.02686181818, 3.21161472727]);data.push([19382.0, 1.77368672727, 3.401002, 3.585048]);data.push([19463.9636364, 1.56725367273, 3.02791763636, 3.19860436364]);data.push([19545.6, 1.55587389091, 3.20572127273, 3.41348345455]);data.push([19621.2727273, 1.62084352727, 3.31449545455, 3.65182745455]);data.push([19698.2727273, 1.58575725455, 3.21283, 3.34256654545]);data.push([19779.2545455, 1.70926581818, 3.25025218182, 3.47701163636]);data.push([19860.7818182, 1.74927043636, 3.39179636364, 3.63214672727]);data.push([19944.6727273, 1.65200352727, 3.38762163636, 3.68678454545]);data.push([20028.2545455, 1.56314681818, 3.05991981818, 3.30310672727]);data.push([20112.1090909, 1.65291187273, 3.418856, 3.61484727273]);data.push([20194.3454545, 1.69666345455, 3.45737018182, 3.78580254545]);data.push([20280.1636364, 1.9638082, 3.769318, 3.91786854545]);data.push([20363.3454545, 1.59369556364, 3.14346654545, 3.27997890909]);data.push([20448.2545455, 1.66708103636, 3.24506636364, 3.48692890909]);data.push([20530.0727273, 1.76229163636, 3.37837854545, 3.54021363636]);data.push([20613.1636364, 1.62156969091, 3.31260509091, 3.51692418182]);data.push([20697.9272727, 1.76731367273, 3.37112836364, 3.63276581818]);data.push([20782.2181818, 1.44218194545, 2.88797181818, 3.02652872727]);data.push([20869.5454545, 1.4537054, 3.00097890909, 3.16848309091]);data.push([20950.8727273, 1.51558858182, 3.15524381818, 3.399286]);data.push([21032.8545455, 1.71840441818, 3.328086, 3.49481636364]);data.push([21121.3272727, 1.57185063636, 3.06270363636, 3.19923163636]);data.push([21209.4545455, 1.60854616364, 3.136524, 3.302602]);data.push([21295.3818182, 1.62496710909, 3.07619163636, 3.26660490909]);data.push([21380.7636364, 1.63490510909, 3.25647090909, 3.53048672727]);data.push([21465.8, 1.76026030909, 3.40209836364, 3.65471454545]);data.push([21549.8181818, 1.84385836364, 3.72619363636, 3.90084163636]);data.push([21630.5818182, 1.73192838182, 3.44716563636, 3.75171781818]);data.push([21712.1090909, 1.67090334545, 3.19679781818, 3.35330945455]);data.push([21798.3636364, 1.80232536364, 3.53420090909, 3.64730090909]);data.push([21886.1636364, 1.82081829091, 3.44531381818, 3.73043909091]);data.push([21964.9818182, 1.7407798, 3.510898, 3.65398636364]);data.push([22051.3272727, 1.7251138, 3.28205963636, 3.51751563636]);data.push([22135.4545455, 1.8859502, 3.58639054545, 3.78538363636]);data.push([22223.7636364, 1.78682196364, 3.47862381818, 3.63020745455]);data.push([22309.1272727, 1.68998305455, 3.34777527273, 3.75116472727]);data.push([22396.9272727, 2.00475392727, 3.68320345455, 3.86705218182]);data.push([22481.1636364, 1.82908698182, 3.60406254545, 3.91054436364]);data.push([22565.8363636, 1.82473309091, 3.49858018182, 3.57010854545]);data.push([22648.8909091, 1.88233872727, 3.68437654545, 3.85239018182]);data.push([22736.0727273, 1.61160827273, 3.30715509091, 3.47034545455]);data.push([22822.7090909, 1.74608958182, 3.32665618182, 3.54047672727]);data.push([22906.3272727, 1.83310836364, 3.47028127273, 3.80677018182]);data.push([22988.8545455, 1.51185409091, 2.96268018182, 3.04780927273]);data.push([23078.2727273, 1.57003376364, 3.06113636364, 3.25968363636]);data.push([23163.2, 1.36357001818, 2.78318309091, 2.90481327273]);data.push([23249.5818182, 1.20933250909, 2.62961709091, 2.78887381818]);data.push([23332.7272727, 1.80833636364, 3.44147163636, 3.57658181818]);data.push([23416.5454545, 1.6893422, 3.29352836364, 3.39618490909]);data.push([23504.0181818, 1.80604363636, 3.53988145455, 3.76028927273]);data.push([23587.7818182, 1.82748527273, 3.55998072727, 3.67615618182]);data.push([23670.0, 2.08161127273, 4.00263272727, 4.27095527273]);data.push([23750.8727273, 1.99988981818, 3.842882, 4.19612109091]);data.push([23828.7818182, 1.95236781818, 3.76331672727, 3.98528981818]);data.push([23913.2363636, 2.17602436364, 4.13175836364, 4.23247218182]);data.push([23998.2363636, 1.96863363636, 3.89132381818, 4.14711745455]);data.push([24079.9272727, 1.91176176364, 3.61754672727, 3.85806890909]);data.push([24157.8363636, 1.93981570909, 3.74474054545, 4.012306]);data.push([24243.1636364, 1.97064109091, 3.82783472727, 3.97487036364]);data.push([24330.6181818, 1.74231654545, 3.40045836364, 3.55372036364]);data.push([24412.5090909, 1.87934385455, 3.723152, 3.97450363636]);data.push([24496.5636364, 1.90176763636, 3.72944945455, 3.92315254545]);data.push([24584.3090909, 1.97670581818, 3.84364218182, 3.98418418182]);data.push([24665.2727273, 1.94200290909, 3.81972545455, 4.08777363636]);data.push([24751.0363636, 2.04417696364, 3.93547763636, 4.03586763636]);data.push([24832.2363636, 2.26727745455, 4.46041690909, 4.70130890909]);data.push([24913.4363636, 2.11120890909, 4.17575218182, 4.40439163636]);data.push([25000.6363636, 2.19958090909, 4.31201127273, 4.61036254545]);data.push([25084.3090909, 2.04240309091, 4.03021145455, 4.37212763636]);data.push([25166.6545455, 1.82591483636, 3.70170145455, 3.94014763636]);data.push([25253.1818182, 1.79379190909, 3.57736163636, 3.84044036364]);data.push([25339.3090909, 2.20480654545, 4.06603309091, 4.28937690909]);data.push([25423.8181818, 2.04952436364, 3.86476436364, 4.02016527273]);data.push([25512.4181818, 2.01007363636, 3.90053836364, 4.08967418182]);data.push([25598.2, 1.98209127273, 3.78377327273, 3.91594690909]);data.push([25680.9454545, 1.99856309091, 3.88743909091, 4.17584690909]);data.push([25758.8909091, 1.79824427273, 3.75619254545, 3.97313363636]);data.push([25844.0, 1.90189654545, 3.72707436364, 3.97867309091]);data.push([25930.1454545, 1.90422927273, 3.59803036364, 3.685374]);data.push([26018.2545455, 1.71063690909, 3.31325818182, 3.60275290909]);data.push([26098.5272727, 1.81034876364, 3.51384909091, 3.77729745455]);data.push([26181.6, 2.00931236364, 3.89311963636, 4.15644236364]);data.push([26264.2, 2.01346472727, 3.81288436364, 3.93631254545]);data.push([26350.7454545, 1.88878963636, 3.69231690909, 3.89042454545]);data.push([26438.9636364, 2.07959927273, 4.05014472727, 4.27780890909]);data.push([26518.5818182, 1.69460254545, 3.35788290909, 3.68785854545]);data.push([26599.5272727, 1.90649490909, 3.76700345455, 4.00945909091]);data.push([26678.5090909, 1.80026072727, 3.526954, 3.87920927273]);data.push([26760.7818182, 1.88972927273, 3.81790018182, 4.087248]);data.push([26843.8, 2.11124854545, 3.91832145455, 4.14803872727]);data.push([26928.2545455, 2.01995072727, 3.75860454545, 3.96822909091]);data.push([27017.1272727, 2.02331436364, 3.99976563636, 4.15030945455]);data.push([27108.4, 2.03805345455, 3.82147927273, 3.94522127273]);data.push([27194.1272727, 2.18388036364, 4.08328745455, 4.312352]);data.push([27280.0909091, 2.18820418182, 4.19856272727, 4.46885218182]);data.push([27362.4363636, 2.15998490909, 3.94291818182, 4.07049854545]);data.push([27446.4727273, 2.13553145455, 4.073506, 4.24299381818]);data.push([27529.6, 1.922116, 3.66973381818, 3.91593472727]);data.push([27608.3090909, 1.88884636364, 3.90770145455, 4.09507309091]);data.push([27690.9454545, 2.017712, 3.98942527273, 4.20946781818]);data.push([27773.0545455, 2.07199054545, 3.96329745455, 4.06480418182]);data.push([27856.1272727, 2.03619127273, 4.02919272727, 4.28083854545]);data.push([27938.5636364, 1.87144690909, 3.68395836364, 3.97237327273]);data.push([28023.2363636, 1.96972036364, 3.81650872727, 4.00217272727]);data.push([28110.2181818, 1.99974909091, 3.80422727273, 4.02031509091]);data.push([28194.0, 1.66505923636, 3.17938545455, 3.39656563636]);data.push([28281.2727273, 1.70107716364, 3.36125727273, 3.528354]);data.push([28368.4363636, 1.83601963636, 3.51967163636, 3.659484]);data.push([28452.5454545, 1.81351563636, 3.54140418182, 3.65266290909]);data.push([28539.7636364, 1.82125021818, 3.48949490909, 3.56919218182]);data.push([28627.0545455, 1.95378290909, 3.76195672727, 3.88023945455]);data.push([28714.3636364, 1.78412963636, 3.46984036364, 3.62221072727]);data.push([28795.3272727, 1.83603236364, 3.46961690909, 3.74727181818]);data.push([28879.0727273, 1.8036524, 3.47281963636, 3.57799709091]);data.push([28965.3636364, 1.96225727273, 3.63129072727, 3.80237018182]);data.push([29048.8727273, 1.83368363636, 3.76314272727, 3.98700545455]);data.push([29136.0, 1.63842618182, 3.24756436364, 3.55976727273]);data.push([29225.7090909, 2.17517545455, 4.03798, 4.18074654545]);data.push([29310.2363636, 1.79266981818, 3.62124236364, 3.84681618182]);data.push([29391.5454545, 1.77915163636, 3.46351818182, 3.62949018182]);data.push([29479.1090909, 2.03466563636, 3.88560436364, 4.00561018182]);data.push([29569.2727273, 2.00645054545, 3.74605, 3.85943854545]);data.push([29653.0181818, 1.73577090909, 3.52885454545, 3.69483963636]);data.push([29739.7090909, 1.87503321818, 3.64160509091, 3.83046672727]);data.push([29828.0181818, 1.83117290909, 3.51492018182, 3.5993]);data.push([29916.5818182, 1.88926143636, 3.67108490909, 3.92061109091]);data.push([29997.5636364, 1.79720709091, 3.66226836364, 3.78059563636]);data.push([30079.0727273, 1.69731818182, 3.43576254545, 3.65717472727]);data.push([30158.4909091, 1.76525016364, 3.51148272727, 3.71684781818]);data.push([30243.5454545, 1.62010781818, 3.14489490909, 3.304786]);data.push([30325.2545455, 1.66519145455, 3.28670818182, 3.60176018182]);data.push([30404.0727273, 1.54262652727, 3.14222745455, 3.39949945455]);data.push([30485.9636364, 1.48481596364, 3.09469418182, 3.428538]);data.push([30562.4363636, 1.77441265455, 3.49962763636, 3.74204945455]);data.push([30650.0909091, 1.65276090909, 3.19471345455, 3.324358]);data.push([30741.5636364, 1.55568458182, 3.16908981818, 3.35623636364]);data.push([30824.9636364, 1.77323792727, 3.46360545455, 3.57638436364]);data.push([30907.0909091, 1.77595, 3.38810836364, 3.56996490909]);data.push([30994.6, 1.68712401818, 3.23288636364, 3.36622327273]);data.push([31081.0727273, 1.81855101818, 3.49281654545, 3.66877636364]);data.push([31164.7090909, 1.86707418182, 3.553582, 3.75764236364]);data.push([31250.3818182, 1.70036636364, 3.387664, 3.48616418182]);data.push([31334.9454545, 1.85912989091, 3.59706345455, 3.78112709091]);data.push([31419.5454545, 1.854364, 3.69981581818, 4.02770709091]);data.push([31502.4363636, 1.65962818182, 3.17593072727, 3.32265163636]);data.push([31586.5090909, 1.72780356364, 3.27307236364, 3.43446509091]);data.push([31675.8181818, 1.81679603636, 3.57344036364, 3.67195127273]);data.push([31764.7272727, 1.72816487273, 3.36365709091, 3.44243727273]);data.push([31848.9636364, 1.69317545455, 3.459726, 3.74262290909]);data.push([31929.4545455, 1.67663510909, 3.32526290909, 3.63895945455]);data.push([32009.3454545, 1.66540236364, 3.24648909091, 3.48845363636]);data.push([32089.5090909, 1.70896636364, 3.43302418182, 3.63847072727]);data.push([32175.4, 1.96519036364, 3.74249454545, 3.81950236364]);data.push([32264.8181818, 1.93775818182, 3.729842, 3.92780527273]);data.push([32351.4545455, 1.97353818182, 3.80091563636, 4.04006]);data.push([32432.8363636, 1.89811876364, 3.65158, 3.78262054545]);data.push([32519.4727273, 2.150652, 4.05604327273, 4.25231272727]);data.push([32602.3272727, 2.29775109091, 4.62607981818, 4.85428890909]);data.push([32684.1272727, 1.77902509091, 3.65034509091, 3.88487272727]);data.push([32765.2909091, 2.196924, 4.08481909091, 4.242584]);data.push([32852.7636364, 1.89435545455, 3.76493618182, 3.92118254545]);data.push([32936.9636364, 1.96527205455, 3.90102945455, 4.09534509091]);data.push([33021.6, 2.15121745455, 4.11499036364, 4.40906709091]);data.push([33104.6181818, 2.01068727273, 4.03339527273, 4.24616145455]);data.push([33188.2363636, 2.04935945455, 3.93758109091, 4.166294]);data.push([33273.1818182, 1.91143218182, 3.72430981818, 3.93430145455]);data.push([33357.7818182, 1.70140054545, 3.30816181818, 3.45216236364]);data.push([33445.7454545, 2.12192636364, 3.92070581818, 4.11953563636]);data.push([33534.0363636, 1.78258207273, 3.44025545455, 3.63437909091]);data.push([33615.0, 1.62252516364, 3.35516690909, 3.55179927273]);data.push([33696.7090909, 1.67418727273, 3.240852, 3.49399109091]);data.push([33781.4363636, 1.932142, 3.60623309091, 3.76355054545]);data.push([33865.7636364, 1.94000181818, 3.73479254545, 3.81806054545]);data.push([33953.9636364, 2.10661545455, 3.90564345455, 4.07356818182]);data.push([34042.8909091, 1.77916787273, 3.61245345455, 3.84367181818]);data.push([34128.9636364, 1.73503983636, 3.48417927273, 3.63196236364]);data.push([34213.2545455, 1.83966025455, 3.55871127273, 3.74529272727]);data.push([34298.0181818, 1.62375654545, 3.37651818182, 3.69868818182]);data.push([34383.4181818, 1.80585296364, 3.46810254545, 3.60695363636]);data.push([34473.8181818, 1.87574309091, 3.58666690909, 3.81929945455]);data.push([34555.8727273, 1.79042854545, 3.48136163636, 3.69801363636]);data.push([34645.5272727, 1.67389345455, 3.47812854545, 3.57943]);data.push([34728.4, 1.96633709091, 3.81924472727, 4.08023509091]);data.push([34812.4727273, 1.98842509091, 3.72114872727, 3.87304690909]);data.push([34902.0909091, 1.90381690909, 3.67364090909, 3.80066563636]);data.push([34989.8545455, 1.75698854545, 3.40360672727, 3.52546454545]);data.push([35073.5090909, 1.753432, 3.45218018182, 3.66861345455]);data.push([35154.9636364, 1.85916241818, 3.60639109091, 3.90041527273]);data.push([35238.2363636, 1.77607914545, 3.50216454545, 3.65474745455]);data.push([35327.1090909, 1.62191989091, 3.31538654545, 3.44384563636]);data.push([35415.5090909, 1.80816165455, 3.62006163636, 3.86816509091]);data.push([35500.3636364, 1.79862487273, 3.43486127273, 3.65891909091]);data.push([35584.3090909, 1.97008836364, 3.66940690909, 3.80029763636]);data.push([35670.5272727, 1.69295990909, 3.312718, 3.60432290909]);data.push([35752.2181818, 1.6945838, 3.48546781818, 3.61673254545]);data.push([35835.1272727, 1.91421945455, 3.68568072727, 3.99021418182]);data.push([35917.2181818, 1.63933516364, 3.28643, 3.515094]);data.push([35999.7090909, 1.75190827273, 3.413856, 3.56371836364]);data.push([36088.6727273, 1.83259069091, 3.62131054545, 3.672672]);data.push([36174.9636364, 1.69141274545, 3.27464363636, 3.43600890909]);data.push([36258.3090909, 1.73556490909, 3.56410818182, 3.87441054545]);data.push([36336.6909091, 1.72136927273, 3.59596181818, 3.75806836364]);data.push([36416.9818182, 1.79705336364, 3.46873309091, 3.71529963636]);data.push([36504.7454545, 1.71309872727, 3.30312145455, 3.43942418182]);data.push([36588.6909091, 1.56887856364, 3.17663654545, 3.360286]);data.push([36674.1454545, 1.88845867273, 3.756752, 3.94978490909]);data.push([36760.1636364, 1.82831167273, 3.66367363636, 3.89937363636]);data.push([36845.0545455, 1.83319145455, 3.52100945455, 3.77419545455]);data.push([36931.0545455, 1.81108618182, 3.52517581818, 3.94380363636]);data.push([37015.4363636, 1.90527963636, 3.694074, 3.89873981818]);data.push([37100.6181818, 1.96714061818, 3.89415854545, 4.07366581818]);data.push([37185.2909091, 2.033404, 3.89561618182, 4.26149418182]);data.push([37270.2545455, 1.85337454545, 3.61247636364, 3.89572072727]);data.push([37354.7272727, 1.82239243636, 3.50989509091, 3.70649254545]);data.push([37437.6, 1.60038721818, 3.39600509091, 3.59693327273]);data.push([37527.2181818, 1.62913278182, 3.19266327273, 3.37491890909]);data.push([37616.9818182, 1.73691427273, 3.28724672727, 3.42742618182]);data.push([37706.3454545, 1.61157558182, 3.17257836364, 3.39725690909]);data.push([37785.8727273, 1.72742418182, 3.57115709091, 3.83537254545]);data.push([37869.5272727, 1.84191672727, 3.61214236364, 3.74410763636]);data.push([37956.9636364, 1.86188636364, 3.58111963636, 3.77369981818]);data.push([38040.4363636, 1.78445163636, 3.61008563636, 3.92277254545]);data.push([38124.6, 2.05615909091, 4.13177254545, 4.36432236364]);data.push([38213.0545455, 1.88934490909, 3.84264872727, 3.98620981818]);data.push([38298.6181818, 2.18102090909, 4.04543181818, 4.35748181818]);data.push([38385.8, 1.85414054545, 3.56685072727, 3.771802]);data.push([38469.9818182, 1.95251018182, 3.687626, 3.82844618182]);data.push([38553.3454545, 1.82330981818, 3.64871072727, 3.74440218182]);data.push([38637.8, 1.93677036364, 3.89446163636, 4.18779454545]);data.push([38722.1454545, 2.08121327273, 4.11098563636, 4.38974254545]);data.push([38800.0909091, 1.87236309091, 3.94193436364, 4.35441]);data.push([38881.4181818, 2.057278, 3.96590563636, 4.07082854545]);data.push([38968.9454545, 1.99640618182, 3.78616127273, 3.95508581818]);data.push([39050.2727273, 2.20606181818, 4.149998, 4.27706327273]);data.push([39132.7818182, 1.78726378182, 3.63480381818, 3.8529]);data.push([39216.2, 2.01998963636, 3.80039545455, 3.91460109091]);data.push([39302.9090909, 1.99921127273, 3.84008418182, 4.04651672727]);data.push([39387.0, 1.75387570909, 3.54745781818, 3.84366981818]);data.push([39469.9454545, 1.98462043636, 3.84157272727, 4.295274]);data.push([39551.9818182, 1.79961454545, 3.73959490909, 3.98855127273]);data.push([39633.5272727, 1.66339729091, 3.40608018182, 3.65643709091]);data.push([39715.4545455, 2.05049272727, 4.01187527273, 4.25164927273]);data.push([39797.1454545, 1.99254898182, 3.85804054545, 4.19740418182]);data.push([39877.8727273, 1.84020545455, 3.77694763636, 4.00807454545]);data.push([39961.0909091, 1.95289927273, 3.74170872727, 3.96926454545]);data.push([40052.0181818, 1.86018321818, 3.63623672727, 3.88654945455]);data.push([40141.4727273, 1.75869469091, 3.53895909091, 3.69039145455]);data.push([40225.8363636, 1.46593783636, 2.96174218182, 3.11897690909]);data.push([40309.3090909, 1.66450069091, 3.22252654545, 3.48925181818]);data.push([40395.9454545, 1.59481445455, 3.25978563636, 3.44750072727]);data.push([40479.0545455, 1.62083705455, 3.10983254545, 3.36619327273]);data.push([40563.9272727, 1.576767, 3.13173618182, 3.24509036364]);data.push([40645.7454545, 1.55793581818, 3.15142290909, 3.41438563636]);data.push([40733.7090909, 1.63881558182, 3.16509890909, 3.29538127273]);data.push([40824.4545455, 1.94044581818, 3.53252545455, 3.62232818182]);data.push([40908.1272727, 1.7632878, 3.35069636364, 3.51460636364]);data.push([40992.8727273, 1.68980743636, 3.63263818182, 3.98190927273]);data.push([41077.4, 1.973556, 3.75319709091, 3.81536672727]);data.push([41166.8545455, 1.95275109091, 3.72027272727, 3.80852709091]);data.push([41253.0545455, 1.73672727273, 3.62878272727, 3.80482309091]);data.push([41333.6909091, 1.83461169091, 3.68153181818, 3.97590781818]);data.push([41413.3636364, 1.67642203636, 3.33991581818, 3.64599236364]);data.push([41501.0363636, 1.73882501818, 3.56320727273, 3.82488381818]);data.push([41582.7272727, 1.73623212727, 3.33364490909, 3.67576109091]);data.push([41672.2545455, 1.858072, 3.560392, 3.66645472727]);data.push([41760.4909091, 1.79880527273, 3.600258, 3.74479290909]);data.push([41844.4181818, 1.74956727273, 3.52249345455, 3.73492363636]);data.push([41929.6, 1.80501485455, 3.38957690909, 3.56368036364]);data.push([42013.9454545, 2.02683836364, 4.04395054545, 4.18405527273]);
best_lineage_phenotype_3 = new Dygraph(
document.getElementById("best_lineage_score_div"),
data,
{
title: 'Score',
xlabel: 'Generations',
ylabel: 'Score',
labels: ['generation', 'min_score', 'mean_score', 'max_score'],
fillGraph: true,
legend: 'always',
labelsDivStyles: { 'textAlign': 'right' },
animatedZooms: true}
);

