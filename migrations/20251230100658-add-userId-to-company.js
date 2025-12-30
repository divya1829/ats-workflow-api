export async function up(queryInterface, Sequelize) {
  // 1️⃣ Add column as ALLOW NULL (temporary)
  await queryInterface.addColumn("Companies", "userId", {
    type: Sequelize.INTEGER,
    allowNull: true,
  });

  // 2️⃣ Set recruiter userId for existing companies
  await queryInterface.sequelize.query(`
    UPDATE "Companies"
    SET "userId" = 1
    WHERE "userId" IS NULL
  `);

  // 3️⃣ Make column NOT NULL
  await queryInterface.changeColumn("Companies", "userId", {
    type: Sequelize.INTEGER,
    allowNull: false,
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn("Companies", "userId");
}
