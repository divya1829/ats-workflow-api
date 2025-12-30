export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn("Jobs", "location", {
    type: Sequelize.STRING,
    allowNull: true, // location can be optional
  });
}

export async function down(queryInterface) {
  await queryInterface.removeColumn("Jobs", "location");
}
