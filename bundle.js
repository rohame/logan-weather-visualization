(function () {
  'use strict';

  const showData = () => {
    scatterPlot();
    ringArc();
    const scatterCircles = d3.select('#weather-data').selectAll('circle');
    const radialArcBars = d3.select('#radial-bars').selectAll('path');
    const interactiveBars = d3.select('#interctive-bars').selectAll('circle');
    connectedView(scatterCircles, radialArcBars, interactiveBars);
  };

  loadData().then(showData);

}());

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNob3dEYXRhID0gKCkgPT4ge1xuICBzY2F0dGVyUGxvdCgpO1xuICByaW5nQXJjKCk7XG4gIGNvbnN0IHNjYXR0ZXJDaXJjbGVzID0gZDMuc2VsZWN0KCcjd2VhdGhlci1kYXRhJykuc2VsZWN0QWxsKCdjaXJjbGUnKTtcbiAgY29uc3QgcmFkaWFsQXJjQmFycyA9IGQzLnNlbGVjdCgnI3JhZGlhbC1iYXJzJykuc2VsZWN0QWxsKCdwYXRoJyk7XG4gIGNvbnN0IGludGVyYWN0aXZlQmFycyA9IGQzLnNlbGVjdCgnI2ludGVyY3RpdmUtYmFycycpLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgY29ubmVjdGVkVmlldyhzY2F0dGVyQ2lyY2xlcywgcmFkaWFsQXJjQmFycywgaW50ZXJhY3RpdmVCYXJzKVxufTtcblxubG9hZERhdGEoKS50aGVuKHNob3dEYXRhKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7RUFBQSxNQUFNLFFBQVEsR0FBRyxNQUFNO0lBQ3JCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsT0FBTyxFQUFFLENBQUM7SUFDVixNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBQztJQUN6RSxhQUFhLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUM7R0FDOUQsQ0FBQzs7RUFFRixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7In0=