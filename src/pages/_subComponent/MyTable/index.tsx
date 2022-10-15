// import Table from 'antd/lib/table';
// import Button from 'antd/lib/button';
// import QueueAnim from 'rc-queue-anim';
// import { TweenOneGroup } from 'rc-tween-one';
// import React from 'react';

// const TableContext = React.createContext(false);

// class TableEnterLeave extends React.Component {

//   constructor(props: {list: any[]}) {
//     super(props);

//     this.enterAnim = [
//       {
//         opacity: 0, x: 30, backgroundColor: '#fffeee', duration: 0,
//       },
//       {
//         height: 0,
//         duration: 200,
//         type: 'from',
//         delay: 250,
//         ease: 'easeOutQuad',
//         onComplete: this.onEnd,
//       },
//       {
//         opacity: 1, x: 0, duration: 250, ease: 'easeOutQuad',
//       },
//       { delay: 1000, backgroundColor: '#fff' },
//     ];
//     this.pageEnterAnim = [
//       {
//         opacity: 0, duration: 0,
//       },
//       {
//         height: 0,
//         duration: 150,
//         type: 'from',
//         delay: 150,
//         ease: 'easeOutQuad',
//         onComplete: this.onEnd,
//       },
//       {
//         opacity: 1, duration: 150, ease: 'easeOutQuad',
//       },
//     ];
//     this.leaveAnim = [
//       { duration: 250, opacity: 0 },
//       { height: 0, duration: 200, ease: 'easeOutQuad' },
//     ];
//     this.pageLeaveAnim = [
//       { duration: 150, opacity: 0 },
//       { height: 0, duration: 150, ease: 'easeOutQuad' },
//     ];

//     // 动画标签，页面切换时改用 context 传递参数；
//     this.animTag = ($props) => {
//       return (
//         <TableContext.Consumer>
//           {(isPageTween) => {
//             return (
//               <TweenOneGroup
//                 component="tbody"
//                 enter={!isPageTween ? this.enterAnim : this.pageEnterAnim}
//                 leave={!isPageTween ? this.leaveAnim : this.pageLeaveAnim}
//                 appear={false}
//                 exclusive
//                 {...$props}
//               />
//             );
//           }}
//         </TableContext.Consumer>
//       );
//     };

//     this.state = {
//       data: this.data,
//       isPageTween: false,
//     };
//   }

//   render() {
//     return (

//       <TableContext.Provider value={this.state.isPageTween}>
//         <Table
//           columns={this.props.columns}
//           pagination={{ pageSize: 4 }}
//           dataSource={this.props.list}
//           className={`${this.props.className}-table`}
//           components={{ body: { wrapper: this.animTag } }}
//           onChange={this.pageChange}
//         />
//       </TableContext.Provider>

//     );
//   }
// }
