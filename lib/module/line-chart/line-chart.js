import * as shape from 'd3-shape';
import Chart from '../chart/chart';
class LineChart extends Chart {
  createPaths(_ref) {
    let {
      data,
      x,
      y
    } = _ref;
    const {
      curve
    } = this.props;
    const line = shape.line().x(d => x(d.x)).y(d => y(d.y)).defined(item => typeof item.y === 'number').curve(curve)(data);
    return {
      path: line,
      line
    };
  }
}
LineChart.propTypes = {
  ...Chart.propTypes
};
LineChart.defaultProps = {
  ...Chart.defaultProps
};
export default LineChart;
//# sourceMappingURL=line-chart.js.map