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
data.push([95.8181818182, 18.2727272727, 13.1636363636, 3.61818181818]);data.push([179.145454545, 39.7454545455, 27.2, 9.87272727273]);data.push([266.872727273, 27.9272727273, 28.6181818182, 17.9454545455]);data.push([350.854545455, 18.4909090909, 17.4727272727, 14.2909090909]);data.push([430.290909091, 13.9454545455, 13.2363636364, 15.7636363636]);data.push([515.327272727, 23.5090909091, 17.9090909091, 35.4545454545]);data.push([601.672727273, 23.7090909091, 8.74545454545, 40.4909090909]);data.push([691.018181818, 17.9636363636, 6.61818181818, 32.0727272727]);data.push([776.672727273, 16.0, 12.6545454545, 29.7818181818]);data.push([862.290909091, 11.5454545455, 8.01818181818, 22.0363636364]);data.push([951.036363636, 18.9454545455, 13.0909090909, 47.6]);data.push([1038.76363636, 28.4, 19.4727272727, 60.1090909091]);data.push([1120.92727273, 31.6181818182, 10.9454545455, 34.2727272727]);data.push([1203.78181818, 42.0363636364, 11.0181818182, 38.9272727273]);data.push([1286.58181818, 22.4727272727, 4.98181818182, 26.0]);data.push([1374.87272727, 16.4363636364, 1.34545454545, 20.4]);data.push([1463.85454545, 12.5636363636, 2.63636363636, 15.7090909091]);data.push([1549.67272727, 11.3636363636, 0.745454545455, 18.6545454545]);data.push([1640.94545455, 15.2545454545, 1.58181818182, 14.5272727273]);data.push([1724.49090909, 20.1636363636, 2.03636363636, 11.4545454545]);data.push([1804.63636364, 27.7090909091, 1.0, 6.01818181818]);data.push([1886.14545455, 50.3454545455, 1.09090909091, 4.05454545455]);data.push([1966.70909091, 36.6909090909, 0.0, 3.54545454545]);data.push([2050.43636364, 35.4909090909, 0.0, 7.50909090909]);data.push([2136.4, 32.5090909091, 0.163636363636, 7.01818181818]);data.push([2219.6, 41.1454545455, 0.763636363636, 10.4]);data.push([2311.23636364, 35.5636363636, 0.272727272727, 15.7090909091]);data.push([2400.05454545, 35.7272727273, 0.527272727273, 11.0363636364]);data.push([2488.18181818, 90.4727272727, 0.127272727273, 25.2545454545]);data.push([2576.25454545, 46.2727272727, 0.472727272727, 5.69090909091]);data.push([2665.14545455, 82.8363636364, 1.41818181818, 6.83636363636]);data.push([2751.74545455, 77.4, 2.10909090909, 1.89090909091]);data.push([2834.07272727, 47.1636363636, 0.927272727273, 2.18181818182]);data.push([2920.87272727, 36.8909090909, 0.781818181818, 5.61818181818]);data.push([3011.32727273, 29.0181818182, 0.0, 4.74545454545]);data.push([3090.50909091, 32.3454545455, 0.890909090909, 15.4363636364]);data.push([3173.43636364, 19.3090909091, 0.381818181818, 10.0363636364]);data.push([3267.09090909, 28.7272727273, 0.0, 7.98181818182]);data.push([3355.90909091, 60.3818181818, 0.0181818181818, 15.3636363636]);data.push([3440.89090909, 35.4909090909, 0.0, 2.65454545455]);data.push([3530.36363636, 43.8727272727, 0.0, 4.34545454545]);data.push([3619.03636364, 41.0363636364, 0.345454545455, 2.05454545455]);data.push([3701.56363636, 83.4181818182, 3.25454545455, 17.0181818182]);data.push([3783.94545455, 58.6, 1.0, 11.8]);data.push([3867.6, 77.0727272727, 1.8, 10.9272727273]);data.push([3949.52727273, 65.9636363636, 2.69090909091, 8.38181818182]);data.push([4032.45454545, 38.8909090909, 1.72727272727, 6.32727272727]);data.push([4114.36363636, 72.4727272727, 0.8, 11.4363636364]);data.push([4200.29090909, 57.6545454545, 0.727272727273, 11.0]);data.push([4286.38181818, 47.1454545455, 1.87272727273, 15.7818181818]);data.push([4371.76363636, 48.1454545455, 1.25454545455, 19.3454545455]);data.push([4457.34545455, 29.5818181818, 1.0, 18.0727272727]);data.push([4547.67272727, 29.6909090909, 5.16363636364, 21.4727272727]);data.push([4634.12727273, 20.4, 3.47272727273, 15.0545454545]);data.push([4718.81818182, 16.4727272727, 0.927272727273, 13.9272727273]);data.push([4804.14545455, 36.9818181818, 1.12727272727, 24.8727272727]);data.push([4887.49090909, 42.0, 3.16363636364, 22.8363636364]);data.push([4974.23636364, 16.7818181818, 2.76363636364, 13.3818181818]);data.push([5053.85454545, 37.0909090909, 6.29090909091, 29.2545454545]);data.push([5137.2, 18.5090909091, 7.03636363636, 19.6363636364]);data.push([5222.98181818, 30.0909090909, 7.54545454545, 33.8909090909]);data.push([5305.87272727, 21.7272727273, 5.81818181818, 25.0909090909]);data.push([5385.65454545, 22.7636363636, 7.27272727273, 36.4363636364]);data.push([5467.03636364, 18.8, 5.56363636364, 25.7272727273]);data.push([5548.69090909, 25.6181818182, 2.0, 21.6363636364]);data.push([5632.21818182, 26.7272727273, 0.0181818181818, 12.5818181818]);data.push([5718.96363636, 52.8181818182, 0.0909090909091, 8.76363636364]);data.push([5805.83636364, 36.0727272727, 0.0727272727273, 5.45454545455]);data.push([5892.05454545, 23.6909090909, 0.0363636363636, 8.10909090909]);data.push([5979.32727273, 17.4545454545, 0.945454545455, 9.69090909091]);data.push([6063.23636364, 20.4181818182, 1.81818181818, 24.3090909091]);data.push([6150.92727273, 15.9454545455, 2.14545454545, 20.3636363636]);data.push([6237.49090909, 20.4181818182, 3.43636363636, 18.7090909091]);data.push([6323.96363636, 37.1454545455, 3.10909090909, 23.8545454545]);data.push([6408.21818182, 36.9818181818, 2.85454545455, 21.7636363636]);data.push([6492.4, 24.1636363636, 3.25454545455, 10.4545454545]);data.push([6577.49090909, 28.8, 2.18181818182, 10.7818181818]);data.push([6663.8, 43.4363636364, 0.127272727273, 10.9636363636]);data.push([6745.63636364, 19.2909090909, 0.218181818182, 4.2]);data.push([6826.8, 24.8545454545, 0.654545454545, 5.74545454545]);data.push([6912.74545455, 21.3636363636, 0.0, 6.81818181818]);data.push([7003.27272727, 47.2, 0.0, 14.3272727273]);data.push([7088.29090909, 17.6, 0.254545454545, 4.69090909091]);data.push([7172.4, 11.3636363636, 0.218181818182, 7.70909090909]);data.push([7255.69090909, 25.6181818182, 0.0, 5.72727272727]);data.push([7341.18181818, 15.4545454545, 0.0, 1.47272727273]);data.push([7431.41818182, 20.3636363636, 0.0, 0.0]);data.push([7515.36363636, 11.1636363636, 0.0, 0.0363636363636]);data.push([7595.67272727, 9.56363636364, 0.0, 0.0363636363636]);data.push([7682.05454545, 9.8, 0.0, 0.963636363636]);data.push([7771.03636364, 12.4, 0.0, 2.49090909091]);data.push([7856.07272727, 12.7090909091, 0.0, 8.92727272727]);data.push([7938.30909091, 33.3636363636, 0.0, 8.49090909091]);data.push([8020.56363636, 19.4727272727, 0.0, 3.56363636364]);data.push([8106.38181818, 32.6727272727, 0.145454545455, 8.27272727273]);data.push([8195.76363636, 53.1272727273, 0.0, 10.6545454545]);data.push([8280.36363636, 44.0727272727, 0.0, 4.90909090909]);data.push([8362.05454545, 99.9818181818, 0.0, 6.0]);data.push([8453.07272727, 35.7272727273, 0.327272727273, 6.05454545455]);data.push([8538.63636364, 26.7818181818, 0.0, 6.76363636364]);data.push([8627.54545455, 35.7818181818, 0.0, 6.78181818182]);data.push([8710.74545455, 21.5090909091, 0.0, 2.76363636364]);data.push([8793.83636364, 53.1272727273, 0.0, 4.43636363636]);data.push([8882.32727273, 43.1454545455, 0.0, 5.30909090909]);data.push([8968.29090909, 36.8181818182, 0.0, 9.41818181818]);data.push([9048.27272727, 10.7454545455, 0.0, 6.47272727273]);data.push([9138.0, 7.49090909091, 0.0, 5.50909090909]);data.push([9221.63636364, 2.32727272727, 0.0, 4.74545454545]);data.push([9305.10909091, 3.78181818182, 0.254545454545, 5.69090909091]);data.push([9388.81818182, 7.56363636364, 0.0363636363636, 15.1272727273]);data.push([9466.87272727, 7.0, 1.21818181818, 12.9090909091]);data.push([9545.96363636, 8.56363636364, 0.0, 10.7818181818]);data.push([9632.50909091, 24.8727272727, 0.163636363636, 22.9454545455]);data.push([9718.90909091, 19.1272727273, 0.0, 11.5090909091]);data.push([9800.72727273, 23.2, 0.0, 12.6909090909]);data.push([9888.81818182, 29.9090909091, 1.0, 20.0363636364]);data.push([9980.05454545, 14.1818181818, 0.0, 22.9272727273]);data.push([10063.2727273, 13.2, 0.0, 16.0727272727]);data.push([10146.5090909, 12.7454545455, 0.0, 7.92727272727]);data.push([10231.6545455, 32.5636363636, 0.218181818182, 15.2727272727]);data.push([10317.8545455, 14.4363636364, 1.16363636364, 5.12727272727]);data.push([10405.2181818, 11.9818181818, 0.945454545455, 6.07272727273]);data.push([10495.7636364, 28.7272727273, 4.05454545455, 11.9818181818]);data.push([10579.9272727, 23.3272727273, 4.58181818182, 12.3818181818]);data.push([10662.0181818, 33.9090909091, 0.690909090909, 12.2363636364]);data.push([10747.0909091, 25.7090909091, 0.127272727273, 15.8545454545]);data.push([10834.2363636, 20.3818181818, 0.0, 8.6]);data.push([10918.9818182, 58.6545454545, 1.07272727273, 18.9636363636]);data.push([11000.4363636, 39.3272727273, 3.29090909091, 24.7818181818]);data.push([11083.7636364, 35.3272727273, 0.109090909091, 23.2727272727]);data.push([11168.9818182, 42.4727272727, 0.0363636363636, 17.8181818182]);data.push([11260.4363636, 58.0, 0.0363636363636, 6.54545454545]);data.push([11345.8, 33.2181818182, 0.0, 7.63636363636]);data.push([11431.1818182, 30.2181818182, 0.381818181818, 6.8]);data.push([11516.9454545, 43.0545454545, 0.909090909091, 9.85454545455]);data.push([11599.2909091, 25.5636363636, 0.0, 3.98181818182]);data.push([11684.1272727, 65.5272727273, 0.381818181818, 14.8545454545]);data.push([11770.7090909, 85.4909090909, 1.05454545455, 15.6]);data.push([11857.4363636, 33.1454545455, 0.0, 5.23636363636]);data.push([11941.2727273, 36.4363636364, 0.0, 4.52727272727]);data.push([12024.6545455, 31.0, 0.0, 4.32727272727]);data.push([12106.0181818, 38.4363636364, 0.945454545455, 7.74545454545]);data.push([12182.2909091, 32.6181818182, 1.03636363636, 11.6181818182]);data.push([12268.0181818, 20.0909090909, 0.618181818182, 12.2363636364]);data.push([12351.3818182, 26.5636363636, 0.636363636364, 17.8]);data.push([12440.4181818, 36.8181818182, 1.78181818182, 14.7454545455]);data.push([12523.4181818, 26.5272727273, 0.218181818182, 12.0363636364]);data.push([12602.0909091, 28.5454545455, 1.43636363636, 9.52727272727]);data.push([12690.4909091, 28.6, 0.436363636364, 15.0181818182]);data.push([12774.8909091, 25.3090909091, 0.345454545455, 10.9454545455]);data.push([12857.2727273, 24.5818181818, 2.16363636364, 14.1272727273]);data.push([12941.2545455, 24.3272727273, 3.2, 10.2181818182]);data.push([13025.5272727, 29.1818181818, 2.32727272727, 9.70909090909]);data.push([13112.9272727, 28.0181818182, 4.25454545455, 11.4727272727]);data.push([13192.9636364, 13.1636363636, 0.0909090909091, 13.2181818182]);data.push([13270.7454545, 33.8545454545, 1.05454545455, 19.0727272727]);data.push([13352.0, 31.9454545455, 0.6, 17.2181818182]);data.push([13434.9454545, 32.0181818182, 1.96363636364, 9.25454545455]);data.push([13515.0727273, 40.3454545455, 3.07272727273, 10.6181818182]);data.push([13596.8727273, 28.1272727273, 0.909090909091, 4.63636363636]);data.push([13684.6545455, 24.8363636364, 0.0909090909091, 4.65454545455]);data.push([13772.6363636, 27.0363636364, 0.0, 3.78181818182]);data.push([13864.1454545, 41.7636363636, 2.85454545455, 13.5090909091]);data.push([13950.5090909, 55.2363636364, 3.52727272727, 13.6181818182]);data.push([14036.9454545, 57.1272727273, 1.96363636364, 11.8]);data.push([14130.0545455, 89.1818181818, 3.47272727273, 14.2727272727]);data.push([14214.8181818, 98.9272727273, 0.490909090909, 20.3454545455]);data.push([14299.9818182, 84.4545454545, 1.69090909091, 14.6727272727]);data.push([14387.8181818, 74.1818181818, 0.0727272727273, 14.1454545455]);data.push([14469.2727273, 43.9272727273, 2.23636363636, 15.6181818182]);data.push([14554.5454545, 25.7818181818, 2.21818181818, 9.54545454545]);data.push([14637.5818182, 27.7454545455, 1.70909090909, 14.0545454545]);data.push([14720.7636364, 34.6181818182, 3.76363636364, 25.6909090909]);data.push([14804.6909091, 29.4545454545, 0.0, 17.6181818182]);data.push([14892.4909091, 44.4545454545, 0.181818181818, 33.4727272727]);data.push([14973.8181818, 17.3090909091, 0.0545454545455, 15.5454545455]);data.push([15059.3272727, 18.3090909091, 0.563636363636, 12.4727272727]);data.push([15139.4545455, 30.3454545455, 1.34545454545, 20.6181818182]);data.push([15227.3454545, 26.6363636364, 0.2, 19.9454545455]);data.push([15315.5454545, 37.7454545455, 2.10909090909, 17.7818181818]);data.push([15402.9090909, 34.0, 3.87272727273, 14.8545454545]);data.push([15482.7454545, 31.5090909091, 4.69090909091, 21.0909090909]);data.push([15563.4363636, 28.0181818182, 3.27272727273, 20.2909090909]);data.push([15647.6545455, 29.0909090909, 2.01818181818, 17.6]);data.push([15728.4181818, 42.1454545455, 1.01818181818, 14.6]);data.push([15814.1090909, 63.7818181818, 3.23636363636, 21.8181818182]);data.push([15899.7454545, 22.7454545455, 0.6, 12.0727272727]);data.push([15985.4909091, 31.7636363636, 0.0909090909091, 19.8181818182]);data.push([16070.8363636, 43.3818181818, 1.10909090909, 28.1090909091]);data.push([16150.9818182, 32.3636363636, 0.309090909091, 14.9454545455]);data.push([16234.6545455, 40.8181818182, 1.09090909091, 17.6727272727]);data.push([16321.0727273, 25.8181818182, 0.0363636363636, 25.5090909091]);data.push([16407.4363636, 23.6727272727, 1.2, 23.0909090909]);data.push([16489.8727273, 28.1636363636, 0.109090909091, 22.0545454545]);data.push([16572.0181818, 14.7272727273, 2.38181818182, 10.3636363636]);data.push([16655.1636364, 27.0, 2.85454545455, 11.0363636364]);data.push([16737.6363636, 31.3636363636, 0.690909090909, 11.0]);data.push([16822.6909091, 42.4, 0.727272727273, 12.7090909091]);data.push([16908.5272727, 31.9454545455, 2.61818181818, 13.1454545455]);data.push([16998.5818182, 41.4181818182, 3.85454545455, 20.9818181818]);data.push([17084.5818182, 19.5818181818, 0.509090909091, 14.3454545455]);data.push([17167.4363636, 12.4909090909, 0.254545454545, 17.4]);data.push([17255.1090909, 9.43636363636, 1.54545454545, 17.0909090909]);data.push([17338.1090909, 21.4, 2.0, 24.4181818182]);data.push([17424.8909091, 18.1454545455, 1.72727272727, 14.4727272727]);data.push([17513.0, 31.9454545455, 6.21818181818, 28.5272727273]);data.push([17597.4, 15.1636363636, 2.41818181818, 16.9818181818]);data.push([17684.5090909, 22.6545454545, 5.23636363636, 22.0909090909]);data.push([17768.3272727, 22.1454545455, 3.05454545455, 24.7454545455]);data.push([17850.4545455, 13.9818181818, 0.0, 15.7818181818]);data.push([17934.5636364, 11.6363636364, 0.0, 12.9272727273]);data.push([18019.2909091, 16.6545454545, 0.0363636363636, 22.1818181818]);data.push([18100.8909091, 18.0181818182, 0.0, 19.4181818182]);data.push([18184.0727273, 20.1818181818, 0.727272727273, 15.9454545455]);data.push([18271.5090909, 30.8, 2.27272727273, 12.5454545455]);data.push([18358.2363636, 48.2727272727, 6.01818181818, 15.9454545455]);data.push([18444.4363636, 13.2, 5.10909090909, 6.87272727273]);data.push([18528.8727273, 9.4, 1.30909090909, 8.69090909091]);data.push([18608.8181818, 8.76363636364, 0.0, 8.67272727273]);data.push([18694.4181818, 13.0909090909, 0.0, 14.7818181818]);data.push([18778.8363636, 18.2909090909, 0.872727272727, 10.8181818182]);data.push([18868.0363636, 26.4181818182, 0.127272727273, 16.9272727273]);data.push([18951.0909091, 27.3636363636, 0.0, 9.94545454545]);data.push([19038.6727273, 10.0363636364, 0.363636363636, 4.23636363636]);data.push([19125.3272727, 12.2545454545, 0.0, 3.98181818182]);data.push([19208.8727273, 15.3090909091, 0.0, 2.92727272727]);data.push([19296.4, 23.2545454545, 0.0, 3.52727272727]);data.push([19382.0, 41.0181818182, 0.236363636364, 7.85454545455]);data.push([19463.9636364, 41.5636363636, 0.0181818181818, 7.43636363636]);data.push([19545.6, 39.8545454545, 0.0, 4.34545454545]);data.push([19621.2727273, 31.9454545455, 0.0, 1.96363636364]);data.push([19698.2727273, 26.0181818182, 0.0, 0.818181818182]);data.push([19779.2545455, 22.0727272727, 0.0, 1.09090909091]);data.push([19860.7818182, 26.8909090909, 0.0, 1.01818181818]);data.push([19944.6727273, 53.7818181818, 0.0, 3.23636363636]);data.push([20028.2545455, 30.3818181818, 0.0, 0.963636363636]);data.push([20112.1090909, 13.2545454545, 0.0, 0.127272727273]);data.push([20194.3454545, 24.9090909091, 0.0, 0.0]);data.push([20280.1636364, 26.8181818182, 0.0, 1.21818181818]);data.push([20363.3454545, 17.0727272727, 0.0, 3.45454545455]);data.push([20448.2545455, 15.7090909091, 0.0, 5.18181818182]);data.push([20530.0727273, 21.8, 1.50909090909, 8.10909090909]);data.push([20613.1636364, 15.8909090909, 2.65454545455, 9.4]);data.push([20697.9272727, 20.1636363636, 0.4, 11.3272727273]);data.push([20782.2181818, 20.8727272727, 0.363636363636, 14.0363636364]);data.push([20869.5454545, 7.76363636364, 0.181818181818, 4.34545454545]);data.push([20950.8727273, 9.29090909091, 0.0545454545455, 3.12727272727]);data.push([21032.8545455, 19.5818181818, 0.945454545455, 4.83636363636]);data.push([21121.3272727, 16.9272727273, 0.0, 10.7818181818]);data.push([21209.4545455, 20.1636363636, 0.0, 13.7272727273]);data.push([21295.3818182, 12.6909090909, 0.0909090909091, 12.2545454545]);data.push([21380.7636364, 7.05454545455, 0.163636363636, 7.16363636364]);data.push([21465.8, 20.1818181818, 0.0, 8.78181818182]);data.push([21549.8181818, 10.4, 0.0, 3.69090909091]);data.push([21630.5818182, 9.23636363636, 0.0, 5.01818181818]);data.push([21712.1090909, 5.47272727273, 0.0363636363636, 6.98181818182]);data.push([21798.3636364, 5.69090909091, 1.14545454545, 7.70909090909]);data.push([21886.1636364, 7.34545454545, 0.872727272727, 11.6363636364]);data.push([21964.9818182, 8.01818181818, 0.127272727273, 9.72727272727]);data.push([22051.3272727, 7.76363636364, 1.01818181818, 10.4181818182]);data.push([22135.4545455, 2.72727272727, 0.0, 7.50909090909]);data.push([22223.7636364, 1.72727272727, 0.763636363636, 8.89090909091]);data.push([22309.1272727, 1.43636363636, 0.0545454545455, 8.72727272727]);data.push([22396.9272727, 2.36363636364, 0.0727272727273, 12.7636363636]);data.push([22481.1636364, 6.18181818182, 0.0, 13.4727272727]);data.push([22565.8363636, 7.21818181818, 0.0, 10.3454545455]);data.push([22648.8909091, 5.47272727273, 0.0, 15.3454545455]);data.push([22736.0727273, 4.83636363636, 0.0, 2.8]);data.push([22822.7090909, 2.92727272727, 0.0, 6.65454545455]);data.push([22906.3272727, 3.03636363636, 0.0, 10.2181818182]);data.push([22988.8545455, 3.14545454545, 0.0, 7.07272727273]);data.push([23078.2727273, 3.18181818182, 0.454545454545, 8.23636363636]);data.push([23163.2, 7.12727272727, 0.0, 14.3272727273]);data.push([23249.5818182, 6.96363636364, 0.0, 12.6727272727]);data.push([23332.7272727, 10.6363636364, 0.0, 15.2181818182]);data.push([23416.5454545, 3.98181818182, 0.0, 6.94545454545]);data.push([23504.0181818, 3.74545454545, 0.0, 16.8727272727]);data.push([23587.7818182, 2.09090909091, 0.0, 10.5272727273]);data.push([23670.0, 4.98181818182, 0.0, 13.5636363636]);data.push([23750.8727273, 4.18181818182, 0.509090909091, 12.6727272727]);data.push([23828.7818182, 4.61818181818, 1.01818181818, 11.5818181818]);data.push([23913.2363636, 13.0363636364, 0.127272727273, 25.6]);data.push([23998.2363636, 10.4363636364, 1.07272727273, 16.4181818182]);data.push([24079.9272727, 9.94545454545, 1.10909090909, 19.7090909091]);data.push([24157.8363636, 3.67272727273, 0.781818181818, 23.8]);data.push([24243.1636364, 3.81818181818, 0.436363636364, 19.3818181818]);data.push([24330.6181818, 5.8, 0.454545454545, 9.87272727273]);data.push([24412.5090909, 9.43636363636, 0.0, 19.1272727273]);data.push([24496.5636364, 3.03636363636, 0.0, 7.8]);data.push([24584.3090909, 0.0, 0.0, 3.54545454545]);data.push([24665.2727273, 0.163636363636, 0.0, 1.76363636364]);data.push([24751.0363636, 0.0, 0.0, 1.0]);data.push([24832.2363636, 0.0181818181818, 0.0, 4.27272727273]);data.push([24913.4363636, 2.27272727273, 0.0909090909091, 12.3272727273]);data.push([25000.6363636, 5.89090909091, 0.436363636364, 18.0909090909]);data.push([25084.3090909, 9.6, 2.47272727273, 17.0]);data.push([25166.6545455, 6.54545454545, 2.23636363636, 12.2545454545]);data.push([25253.1818182, 18.2181818182, 3.96363636364, 24.5454545455]);data.push([25339.3090909, 36.5636363636, 11.0909090909, 34.5818181818]);data.push([25423.8181818, 22.4545454545, 7.94545454545, 11.3818181818]);data.push([25512.4181818, 20.8727272727, 3.8, 10.2909090909]);data.push([25598.2, 18.6363636364, 1.2, 7.43636363636]);data.push([25680.9454545, 22.5818181818, 0.781818181818, 8.4]);data.push([25758.8909091, 5.03636363636, 0.0, 9.07272727273]);data.push([25844.0, 4.18181818182, 0.145454545455, 12.2181818182]);data.push([25930.1454545, 2.65454545455, 0.0, 12.0181818182]);data.push([26018.2545455, 9.89090909091, 0.0, 13.5454545455]);data.push([26098.5272727, 21.0181818182, 0.0181818181818, 24.1090909091]);data.push([26181.6, 13.0545454545, 1.81818181818, 13.4]);data.push([26264.2, 33.0545454545, 5.69090909091, 28.6727272727]);data.push([26350.7454545, 35.4363636364, 1.65454545455, 16.5818181818]);data.push([26438.9636364, 30.4909090909, 0.290909090909, 11.2363636364]);data.push([26518.5818182, 30.4727272727, 0.290909090909, 23.2363636364]);data.push([26599.5272727, 35.1272727273, 0.945454545455, 30.5636363636]);data.push([26678.5090909, 38.8, 0.509090909091, 25.8181818182]);data.push([26760.7818182, 17.4727272727, 0.0, 11.3636363636]);data.push([26843.8, 41.5454545455, 0.163636363636, 21.3818181818]);data.push([26928.2545455, 30.2, 3.05454545455, 14.4727272727]);data.push([27017.1272727, 36.7454545455, 5.78181818182, 9.41818181818]);data.push([27108.4, 48.2363636364, 2.76363636364, 15.4545454545]);data.push([27194.1272727, 24.9272727273, 0.6, 14.5454545455]);data.push([27280.0909091, 39.5818181818, 0.327272727273, 15.8727272727]);data.push([27362.4363636, 27.6909090909, 0.818181818182, 6.01818181818]);data.push([27446.4727273, 9.85454545455, 0.0, 1.72727272727]);data.push([27529.6, 13.6545454545, 0.0, 1.29090909091]);data.push([27608.3090909, 21.4363636364, 0.0, 1.85454545455]);data.push([27690.9454545, 23.0727272727, 0.0, 1.32727272727]);data.push([27773.0545455, 32.8545454545, 0.0, 3.65454545455]);data.push([27856.1272727, 31.4181818182, 0.0, 2.52727272727]);data.push([27938.5636364, 37.3272727273, 0.0181818181818, 12.4727272727]);data.push([28023.2363636, 20.6727272727, 0.0, 11.9454545455]);data.push([28110.2181818, 16.6545454545, 0.0, 21.9272727273]);data.push([28194.0, 9.50909090909, 0.0, 9.03636363636]);data.push([28281.2727273, 5.34545454545, 0.0, 5.47272727273]);data.push([28368.4363636, 2.45454545455, 0.0, 5.01818181818]);data.push([28452.5454545, 2.83636363636, 0.0, 8.30909090909]);data.push([28539.7636364, 2.10909090909, 0.0363636363636, 6.05454545455]);data.push([28627.0545455, 0.509090909091, 0.0, 5.87272727273]);data.push([28714.3636364, 1.2, 0.109090909091, 7.12727272727]);data.push([28795.3272727, 6.23636363636, 0.0, 19.6181818182]);data.push([28879.0727273, 3.32727272727, 0.0, 13.7090909091]);data.push([28965.3636364, 4.90909090909, 1.2, 10.6727272727]);data.push([29048.8727273, 1.6, 2.18181818182, 2.70909090909]);data.push([29136.0, 0.0545454545455, 0.0363636363636, 1.27272727273]);data.push([29225.7090909, 0.0, 0.0, 3.98181818182]);data.push([29310.2363636, 0.236363636364, 0.0, 3.78181818182]);data.push([29391.5454545, 0.872727272727, 0.109090909091, 5.12727272727]);data.push([29479.1090909, 1.78181818182, 0.0, 5.61818181818]);data.push([29569.2727273, 5.27272727273, 0.0, 8.56363636364]);data.push([29653.0181818, 4.23636363636, 0.218181818182, 8.72727272727]);data.push([29739.7090909, 5.2, 1.72727272727, 8.54545454545]);data.push([29828.0181818, 4.21818181818, 0.927272727273, 10.5090909091]);data.push([29916.5818182, 14.8, 1.56363636364, 14.4909090909]);data.push([29997.5636364, 8.89090909091, 0.181818181818, 9.43636363636]);data.push([30079.0727273, 8.43636363636, 0.0545454545455, 9.09090909091]);data.push([30158.4909091, 9.72727272727, 1.14545454545, 10.6363636364]);data.push([30243.5454545, 12.3818181818, 0.0, 9.96363636364]);data.push([30325.2545455, 2.07272727273, 0.527272727273, 6.21818181818]);data.push([30404.0727273, 3.50909090909, 0.0545454545455, 6.16363636364]);data.push([30485.9636364, 4.49090909091, 1.43636363636, 5.94545454545]);data.push([30562.4363636, 8.58181818182, 1.09090909091, 7.50909090909]);data.push([30650.0909091, 10.6363636364, 0.327272727273, 5.63636363636]);data.push([30741.5636364, 15.0727272727, 0.145454545455, 7.4]);data.push([30824.9636364, 21.9454545455, 2.14545454545, 12.3454545455]);data.push([30907.0909091, 42.6, 3.6, 13.4545454545]);data.push([30994.6, 10.0181818182, 0.0, 1.16363636364]);data.push([31081.0727273, 40.1454545455, 0.0, 3.81818181818]);data.push([31164.7090909, 49.6909090909, 1.09090909091, 6.92727272727]);data.push([31250.3818182, 37.6909090909, 0.563636363636, 5.29090909091]);data.push([31334.9454545, 32.2, 1.50909090909, 8.18181818182]);data.push([31419.5454545, 28.5818181818, 3.50909090909, 9.10909090909]);data.push([31502.4363636, 25.3454545455, 1.70909090909, 7.89090909091]);data.push([31586.5090909, 16.1090909091, 0.0, 4.63636363636]);data.push([31675.8181818, 13.1090909091, 0.163636363636, 3.92727272727]);data.push([31764.7272727, 15.9454545455, 1.07272727273, 3.38181818182]);data.push([31848.9636364, 24.8363636364, 1.34545454545, 3.07272727273]);data.push([31929.4545455, 26.0, 3.09090909091, 2.27272727273]);data.push([32009.3454545, 35.8909090909, 0.563636363636, 10.7090909091]);data.push([32089.5090909, 17.5818181818, 0.0, 3.23636363636]);data.push([32175.4, 31.1090909091, 0.0, 5.10909090909]);data.push([32264.8181818, 23.9454545455, 0.0, 3.92727272727]);data.push([32351.4545455, 31.4909090909, 0.181818181818, 6.27272727273]);data.push([32432.8363636, 14.3636363636, 0.6, 3.36363636364]);data.push([32519.4727273, 23.1090909091, 0.0909090909091, 5.10909090909]);data.push([32602.3272727, 18.7272727273, 0.563636363636, 4.36363636364]);data.push([32684.1272727, 11.0727272727, 1.2, 3.69090909091]);data.push([32765.2909091, 24.7272727273, 2.21818181818, 15.8545454545]);data.push([32852.7636364, 14.0363636364, 0.236363636364, 10.2]);data.push([32936.9636364, 4.70909090909, 0.381818181818, 8.29090909091]);data.push([33021.6, 3.43636363636, 0.0, 8.07272727273]);data.push([33104.6181818, 0.8, 0.327272727273, 5.94545454545]);data.push([33188.2363636, 0.963636363636, 1.0, 5.63636363636]);data.push([33273.1818182, 2.12727272727, 1.0, 7.32727272727]);data.push([33357.7818182, 2.76363636364, 1.30909090909, 6.65454545455]);data.push([33445.7454545, 6.25454545455, 1.87272727273, 13.2545454545]);data.push([33534.0363636, 4.36363636364, 1.69090909091, 7.61818181818]);data.push([33615.0, 8.0, 0.654545454545, 8.25454545455]);data.push([33696.7090909, 25.8545454545, 0.454545454545, 19.1818181818]);data.push([33781.4363636, 20.0, 0.818181818182, 13.6545454545]);data.push([33865.7636364, 19.1272727273, 0.563636363636, 13.5454545455]);data.push([33953.9636364, 30.3090909091, 1.2, 14.5272727273]);data.push([34042.8909091, 11.3090909091, 2.18181818182, 11.6]);data.push([34128.9636364, 15.9636363636, 0.636363636364, 20.5090909091]);data.push([34213.2545455, 22.6727272727, 0.6, 23.8545454545]);data.push([34298.0181818, 13.5636363636, 0.981818181818, 13.2363636364]);data.push([34383.4181818, 21.9272727273, 0.581818181818, 16.2909090909]);data.push([34473.8181818, 36.7090909091, 1.69090909091, 15.3818181818]);data.push([34555.8727273, 28.9636363636, 1.63636363636, 12.1454545455]);data.push([34645.5272727, 14.5818181818, 1.6, 11.7636363636]);data.push([34728.4, 17.5272727273, 1.90909090909, 21.4909090909]);data.push([34812.4727273, 12.8, 1.58181818182, 22.4]);data.push([34902.0909091, 14.1636363636, 1.90909090909, 13.4545454545]);data.push([34989.8545455, 13.5818181818, 0.0, 19.7272727273]);data.push([35073.5090909, 17.6363636364, 0.163636363636, 19.5090909091]);data.push([35154.9636364, 14.9454545455, 0.363636363636, 12.2363636364]);data.push([35238.2363636, 17.0363636364, 1.89090909091, 10.8]);data.push([35327.1090909, 15.3090909091, 2.6, 10.2]);data.push([35415.5090909, 19.6909090909, 6.18181818182, 17.8545454545]);data.push([35500.3636364, 45.8181818182, 13.8909090909, 40.2727272727]);data.push([35584.3090909, 35.0363636364, 7.12727272727, 26.3090909091]);data.push([35670.5272727, 32.9818181818, 0.690909090909, 11.8909090909]);data.push([35752.2181818, 36.2545454545, 0.181818181818, 16.1818181818]);data.push([35835.1272727, 32.7454545455, 1.03636363636, 26.2909090909]);data.push([35917.2181818, 12.9272727273, 3.14545454545, 17.5454545455]);data.push([35999.7090909, 8.30909090909, 2.10909090909, 13.7636363636]);data.push([36088.6727273, 13.8363636364, 3.14545454545, 14.0545454545]);data.push([36174.9636364, 22.2363636364, 9.45454545455, 25.6545454545]);data.push([36258.3090909, 12.1090909091, 5.8, 20.0363636364]);data.push([36336.6909091, 17.5454545455, 4.67272727273, 16.0909090909]);data.push([36416.9818182, 12.5090909091, 3.09090909091, 9.69090909091]);data.push([36504.7454545, 14.9636363636, 3.38181818182, 8.58181818182]);data.push([36588.6909091, 16.1818181818, 3.87272727273, 7.18181818182]);data.push([36674.1454545, 19.6727272727, 2.96363636364, 6.69090909091]);data.push([36760.1636364, 30.2909090909, 6.74545454545, 9.18181818182]);data.push([36845.0545455, 23.3090909091, 1.85454545455, 20.8363636364]);data.push([36931.0545455, 13.9090909091, 0.436363636364, 11.2181818182]);data.push([37015.4363636, 15.5090909091, 1.6, 15.7818181818]);data.push([37100.6181818, 9.96363636364, 1.07272727273, 12.5272727273]);data.push([37185.2909091, 13.5454545455, 0.8, 12.9818181818]);data.push([37270.2545455, 8.25454545455, 0.0363636363636, 8.29090909091]);data.push([37354.7272727, 7.03636363636, 0.0, 12.9818181818]);data.push([37437.6, 4.69090909091, 0.0, 6.8]);data.push([37527.2181818, 5.69090909091, 0.0, 12.4]);data.push([37616.9818182, 3.21818181818, 0.0, 7.41818181818]);data.push([37706.3454545, 2.76363636364, 0.0, 6.29090909091]);data.push([37785.8727273, 5.61818181818, 0.218181818182, 6.6]);data.push([37869.5272727, 7.49090909091, 0.236363636364, 9.72727272727]);data.push([37956.9636364, 10.4363636364, 0.527272727273, 10.3818181818]);data.push([38040.4363636, 7.07272727273, 0.0, 5.2]);data.push([38124.6, 6.52727272727, 0.636363636364, 5.74545454545]);data.push([38213.0545455, 3.10909090909, 0.0, 5.67272727273]);data.push([38298.6181818, 6.78181818182, 1.0, 9.90909090909]);data.push([38385.8, 6.50909090909, 1.05454545455, 11.2363636364]);data.push([38469.9818182, 3.25454545455, 0.509090909091, 8.10909090909]);data.push([38553.3454545, 3.10909090909, 1.07272727273, 5.56363636364]);data.push([38637.8, 2.38181818182, 0.254545454545, 9.09090909091]);data.push([38722.1454545, 3.16363636364, 0.763636363636, 7.61818181818]);data.push([38800.0909091, 2.16363636364, 0.490909090909, 15.7090909091]);data.push([38881.4181818, 2.74545454545, 1.65454545455, 14.3090909091]);data.push([38968.9454545, 2.34545454545, 0.0363636363636, 6.70909090909]);data.push([39050.2727273, 2.6, 0.0, 15.4909090909]);data.push([39132.7818182, 1.47272727273, 0.0, 10.9636363636]);data.push([39216.2, 6.25454545455, 0.890909090909, 13.1090909091]);data.push([39302.9090909, 8.81818181818, 0.0, 12.0909090909]);data.push([39387.0, 18.1090909091, 0.0, 20.2727272727]);data.push([39469.9454545, 19.8727272727, 0.0, 20.8363636364]);data.push([39551.9818182, 11.2545454545, 0.545454545455, 13.2181818182]);data.push([39633.5272727, 9.34545454545, 0.872727272727, 11.2727272727]);data.push([39715.4545455, 11.4, 2.72727272727, 20.9636363636]);data.push([39797.1454545, 17.7818181818, 1.4, 20.8181818182]);data.push([39877.8727273, 26.5636363636, 4.56363636364, 20.9272727273]);data.push([39961.0909091, 34.5818181818, 1.94545454545, 32.1272727273]);data.push([40052.0181818, 12.0545454545, 5.14545454545, 11.8181818182]);data.push([40141.4727273, 12.5454545455, 6.83636363636, 17.2]);data.push([40225.8363636, 12.3454545455, 9.70909090909, 18.7818181818]);data.push([40309.3090909, 18.7818181818, 7.47272727273, 24.8727272727]);data.push([40395.9454545, 17.1818181818, 4.50909090909, 20.6181818182]);data.push([40479.0545455, 32.6545454545, 4.49090909091, 46.3818181818]);data.push([40563.9272727, 26.4363636364, 4.96363636364, 35.3272727273]);data.push([40645.7454545, 10.5272727273, 0.0727272727273, 9.67272727273]);data.push([40733.7090909, 25.3272727273, 1.43636363636, 9.72727272727]);data.push([40824.4545455, 46.5090909091, 2.27272727273, 15.6545454545]);data.push([40908.1272727, 19.6909090909, 0.527272727273, 5.70909090909]);data.push([40992.8727273, 38.2545454545, 1.05454545455, 8.78181818182]);data.push([41077.4, 42.1272727273, 0.472727272727, 4.67272727273]);data.push([41166.8545455, 34.2909090909, 0.0363636363636, 2.63636363636]);data.push([41253.0545455, 21.6909090909, 0.0, 1.0]);data.push([41333.6909091, 22.6363636364, 0.327272727273, 2.36363636364]);data.push([41413.3636364, 21.5636363636, 0.0727272727273, 2.23636363636]);data.push([41501.0363636, 15.5090909091, 0.0, 1.87272727273]);data.push([41582.7272727, 28.5636363636, 0.0, 5.09090909091]);data.push([41672.2545455, 25.0727272727, 0.0, 5.36363636364]);data.push([41760.4909091, 10.3636363636, 0.0, 4.0]);data.push([41844.4181818, 15.7818181818, 0.0, 4.63636363636]);data.push([41929.6, 37.1090909091, 0.127272727273, 9.21818181818]);data.push([42013.9454545, 17.7090909091, 0.0, 0.690909090909]);
best_lineage_genome_structure_8 = new Dygraph(
document.getElementById("best_lineage_region_types_div"),
data,
{
title: 'Types of functional regions',
xlabel: 'Generations',
ylabel: 'Number by type',
labels: ['generation', 'nb_E_regions', 'nb_TF_regions', 'nb_mixed_regions'],
stackedGraph: true,
legend: 'always',
labelsDivStyles: { 'textAlign': 'right' },
animatedZooms: true}
);
