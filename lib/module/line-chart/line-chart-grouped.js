import * as shape from 'd3-shape';
import ChartGrouped from '../chart/chart-grouped';
class LineChartGrouped extends ChartGrouped {
  createPaths(_ref) {
    let {
      data,
      x,
      y
    } = _ref;
    const {
      curve
    } = this.props;
    const lines = data.map(line => shape.line().x(d => x(d.x)).y(d => y(d.y)).defined(item => typeof item.y === 'number').curve(curve)(line));
    return {
      path: lines,
      lines
    };
  }
}
LineChartGrouped.propTypes = {
  ...ChartGrouped.propTypes
};
LineChartGrouped.defaultProps = {
  ...ChartGrouped.defaultProps
};
export default LineChartGrouped;
//# sourceMappingURL=line-chart-grouped.js.map