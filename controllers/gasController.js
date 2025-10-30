
exports.gasstation = (req, res) => {
  res.render("home/gasstation", {
    title: 'gasstation',
    message: 'Vælg tankstation',
    name: [{fornavn:'Steve'},{fornavn:'Lone'}, {fornavn:'Jan'}]
  });

};
