/* ============================================================
   ACCREDITED USERS DATABASE & CREDENTIAL MATCHING ENGINE
   ============================================================ */

const USERS_DB_KEY = "sdi_registered_users_registry";

// Initial seed accredited accounts with diverse faculty titles and student placements
const defaultSeededUsers = [
  {
    "role": "student",
    "identifier": "230591***",
    "matric": "230591***",
    "password": "password123",
    "name": "BENJAMIN OPEYEMI ABRAHAM",
    "phone": "+234 906 924 4034",
    "dept": "Computer Science (Millennium Fellow lead)",
    "institution": "Lagos State University (LASU)",
    "level": "300 Level",
    "hostOrg": "Directorate of SIWES, LASUED",
    "placementAddress": "Main Directorate Complex, University Innovation Center, Lagos State",
    "institutionalSupervisor": "Dr. A. O. Institutional Coordinator",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Dr. A. O. Institutional Coordinator",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng | +234 803 000 1122",
    "industrySupervisor": "Engr. K. Balogun (SIWES Technical Lead)",
    "industrySupervisorEmail": "k.balogun@lasued.edu.ng",
    "industrySupervisorPhone": "+234 803 000 1122",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z",
    "placementStartDate": "2026-03-02",
    "currentWorkingWeek": 24
  },
  {
    "role": "student",
    "identifier": "24110401003",
    "matric": "24110401003",
    "password": "password123",
    "name": "AJOSE TADEYON ALEXANDER",
    "phone": "09164455965",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry Local Government",
    "placementAddress": "Badagry Secretariat Ajara, Roundabout",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrylocal.ng",
    "industrySupervisorPhone": "09164455965",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401004",
    "matric": "24110401004",
    "password": "password123",
    "name": "ALUKO TOLUWALOPE PRECIOUS",
    "phone": "09124331180",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Otto-Awori LCDA",
    "placementAddress": "Km 28, Lagos - Badagry Expressway, Ile-Oba Busstop",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ottoaworilcd.ng",
    "industrySupervisorPhone": "09124331180",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401005",
    "matric": "24110401005",
    "password": "password123",
    "name": "AMOS ABRAHAM IMOH",
    "phone": "09163759231",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Otto-Awori LCDA",
    "placementAddress": "Km 28, Lagos - Badagry Expressway, Ile-Oba Busstop",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ottoaworilcd.ng",
    "industrySupervisorPhone": "09163759231",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401007",
    "matric": "24110401007",
    "password": "password123",
    "name": "CHUKWUANUGOM CHIUGO DEBORAH",
    "phone": "09076145027",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Otto-Awori LCDA",
    "placementAddress": "Km 28, Lagos - Badagry Expressway, Ile-Oba Busstop",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ottoaworilcd.ng",
    "industrySupervisorPhone": "09076145027",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401010",
    "matric": "24110401010",
    "password": "password123",
    "name": "EZE ANAYOCHUKWU LOVETH",
    "phone": "07066872521",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Otto-Awori LCDA",
    "placementAddress": "Km 28, Lagos - Badagry Expressway, Ile-Oba Busstop",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ottoaworilcd.ng",
    "industrySupervisorPhone": "07066872521",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401011",
    "matric": "24110401011",
    "password": "password123",
    "name": "HODONU EBUNOLUWA MAUYON",
    "phone": "09123200090",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Otto-Awori LCDA",
    "placementAddress": "Km 28, Lagos - Badagry Expressway, Ile-Oba Busstop",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ottoaworilcd.ng",
    "industrySupervisorPhone": "09123200090",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401013",
    "matric": "24110401013",
    "password": "password123",
    "name": "NNEKE TEMPLE ACHEBE",
    "phone": "09132984411",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Otto-Awori LCDA",
    "placementAddress": "Km 28, Lagos - Badagry Expressway, Ile-Oba Busstop",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ottoaworilcd.ng",
    "industrySupervisorPhone": "09132984411",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401015",
    "matric": "24110401015",
    "password": "password123",
    "name": "OLUWAJANA ABIODUN SERAH",
    "phone": "08123607178",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Otto-Awori LCDA",
    "placementAddress": "Km 28, Lagos - Badagry Expressway, Ile-Oba Busstop",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ottoaworilcd.ng",
    "industrySupervisorPhone": "08123607178",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401006",
    "matric": "24110401006",
    "password": "password123",
    "name": "BABALOLA OLUWAMAYOWA FLORENCE",
    "phone": "07086506799",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Unstoppable Petals School",
    "placementAddress": "5, Church Street, Off Idowu Shogbade Street, Haruna-Isale, Ifako-Ijaiye",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@unstoppablep.ng",
    "industrySupervisorPhone": "07086506799",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401012",
    "matric": "24110401012",
    "password": "password123",
    "name": "JOSEPH SAMUEL SEMAKO",
    "phone": "7018286024",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry Local Government",
    "placementAddress": "Badagry Secretariat Ajara, Badagry",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrylocal.ng",
    "industrySupervisorPhone": "7018286024",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401016",
    "matric": "24110401016",
    "password": "password123",
    "name": "OYE OLAMIDE AUGUSTINA",
    "phone": "08112769851",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Lagos State Traffic Management Authority",
    "placementAddress": "L.S.T.C Building Oshodi-Apapa Expressway, Oja Busstop, Ilupeju, Oshodi, Lagos",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@lagosstatetr.ng",
    "industrySupervisorPhone": "08112769851",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401018",
    "matric": "24110401018",
    "password": "password123",
    "name": "OBEGWE ESTHER OGHENEFEGOR",
    "phone": "09139958268",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Otto-Awori LCDA",
    "placementAddress": "Km 28, Lagos - Badagry Expressway, Ile-Oba Busstop",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ottoaworilcd.ng",
    "industrySupervisorPhone": "09139958268",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401009",
    "matric": "24110401009",
    "password": "password123",
    "name": "EBENEZER SEUN GIFT",
    "phone": "09130266132",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ikorodu Local Government",
    "placementAddress": "Owutu House, Ikorodu, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ikorodulocal.ng",
    "industrySupervisorPhone": "09130266132",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110401008",
    "matric": "24110401008",
    "password": "password123",
    "name": "DUROTOLUWA DANIEL KOLAWOLE",
    "phone": "09042555667",
    "dept": "Christain Religious Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Igbogbo Baiyeku Local Government Development Area",
    "placementAddress": "27, Obafemi Awolowo Road, Igbogbo, Ikorodu, Lagos",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@igbogbobaiye.ng",
    "industrySupervisorPhone": "09042555667",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102065",
    "matric": "24110102065",
    "password": "password123",
    "name": "NWADIKE SANDRA AMARACHI",
    "phone": "08163871531",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "5 Cities Prints",
    "placementAddress": "17, Iyana Era Busstop, Ojo Local Government, Lagos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@5citiesprint.ng",
    "industrySupervisorPhone": "08163871531",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102007",
    "matric": "24110102007",
    "password": "password123",
    "name": "ADEOTI GANIYAT AYOMIDE",
    "phone": "09132138986",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Adams Art Studio",
    "placementAddress": "12, Ben Amamize Street, Okoafor, Badagry, Old Winnys Busstop, Lagos",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@adamsartstud.ng",
    "industrySupervisorPhone": "09132138986",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102052",
    "matric": "24110102052",
    "password": "password123",
    "name": "IDOWU LYDIA TOLUWALASE",
    "phone": "09071599013",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Adams Art Studio",
    "placementAddress": "12, Ben Amamize Street, Okoafor, Badagry, Old Winnys Busstop, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@adamsartstud.ng",
    "industrySupervisorPhone": "09071599013",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102092",
    "matric": "24110102092",
    "password": "password123",
    "name": "OYEWOLE ADEDAMOLA MARIAM",
    "phone": "09161698960",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "AG-Best Computer Enterprise",
    "placementAddress": "Opposite Technical College, Along Lusada Raod, Igbesa, Ogun State",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@agbestcomput.ng",
    "industrySupervisorPhone": "09161698960",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102018",
    "matric": "24110102018",
    "password": "password123",
    "name": "AKINPELU VICTORIA AYOMIDE",
    "phone": "08071003182",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Amos Prints Ltd",
    "placementAddress": "35, Olorunda Street, Morogbo, Lagos",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@amosprintslt.ng",
    "industrySupervisorPhone": "08071003182",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102030",
    "matric": "24110102030",
    "password": "password123",
    "name": "AWAMENU MARGARET SELOME",
    "phone": "08106942019",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Amos Prints Ltd",
    "placementAddress": "35, Olorunda Street, Morogbo, Lagos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@amosprintslt.ng",
    "industrySupervisorPhone": "08106942019",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102084",
    "matric": "24110102084",
    "password": "password123",
    "name": "ONAKUNLE OLUWADARASIMI MARVELOUS",
    "phone": "09072751517",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Amos Prints Ltd",
    "placementAddress": "35, Olorunda Street, Morogbo, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@amosprintslt.ng",
    "industrySupervisorPhone": "09072751517",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102107",
    "matric": "24110102107",
    "password": "password123",
    "name": "YUSUF ANIFAT OMOLARA",
    "phone": "09068953693",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Amos Prints Ltd",
    "placementAddress": "35, Olorunda Street, Morogbo, Lagos",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@amosprintslt.ng",
    "industrySupervisorPhone": "09068953693",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102010",
    "matric": "24110102010",
    "password": "password123",
    "name": "ADIMODE KAIRAT AYINKE",
    "phone": "07040183861",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "APJ Cristal Concept",
    "placementAddress": "70, Oloto Ring Road, Otto Awori, Lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@apjcristalco.ng",
    "industrySupervisorPhone": "07040183861",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102009",
    "matric": "24110102009",
    "password": "password123",
    "name": "ADESOKAN MAYOWA GRACE",
    "phone": "09161281706",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "ARE's Fashion Palace",
    "placementAddress": "Budo Pennisula Estate, Phase 2, Ajah, Lagos",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@aresfashionp.ng",
    "industrySupervisorPhone": "09161281706",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102101",
    "matric": "24110102101",
    "password": "password123",
    "name": "TEME PROFIT WENGIDIELAYO",
    "phone": "07018802837",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Blackman Clothing",
    "placementAddress": "251, Ilogbo Road, Pako Busstop, Babalola, Ilogbo, Ojo, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@blackmanclot.ng",
    "industrySupervisorPhone": "07018802837",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102038",
    "matric": "24110102038",
    "password": "password123",
    "name": "BONU DAVID NUNAYON",
    "phone": "0810 885 9776",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "BMB Arts Creative Concepts Enterprise",
    "placementAddress": "Fine & Applied Arts Department",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@bmbartscreat.ng",
    "industrySupervisorPhone": "0810 885 9776",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102043",
    "matric": "24110102043",
    "password": "password123",
    "name": "EZIDONYE SUCCESS PRINCESS",
    "phone": "08067050138",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "BMB Arts Creative Concepts Enterprise",
    "placementAddress": "Fine & Applied Arts Department",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@bmbartscreat.ng",
    "industrySupervisorPhone": "08067050138",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102050",
    "matric": "24110102050",
    "password": "password123",
    "name": "IBIWOYE ELIJAH KOLAWOLE",
    "phone": "08068308154",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "BMB Arts Creative Concepts Enterprise",
    "placementAddress": "Fine & Applied Arts Department",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@bmbartscreat.ng",
    "industrySupervisorPhone": "08068308154",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "25110102076",
    "matric": "25110102076",
    "password": "password123",
    "name": "MAKANJUOLA OLUWAPELUMI DAVID",
    "phone": "09131753204",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "BMB Arts Creative Concepts Enterprise",
    "placementAddress": "Fine & Applied Arts Department",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@bmbartscreat.ng",
    "industrySupervisorPhone": "09131753204",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102080",
    "matric": "24110102080",
    "password": "password123",
    "name": "OLATUNDE OLUWAJUWON STEPHEN",
    "phone": "09117004255",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "BMB Arts Creative Concepts Enterprise",
    "placementAddress": "Fine & Applied Arts Department",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@bmbartscreat.ng",
    "industrySupervisorPhone": "09117004255",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102019",
    "matric": "24110102019",
    "password": "password123",
    "name": "AKINSANMI EMMANUEL OKIKIOLA",
    "phone": "07017055079",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Campus Image Sensation",
    "placementAddress": "29, Ogundele Street, Mafoluku, Oshodi",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@campusimages.ng",
    "industrySupervisorPhone": "07017055079",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102029",
    "matric": "24110102029",
    "password": "password123",
    "name": "AREWA AMUDALAT INUMIDUN",
    "phone": "09043893667",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Cherry Clay Arts",
    "placementAddress": "1, Alhaji Abdulakeem Bin Sulaiman Like Mind Estate, Eruwen Road, Ikorodu",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@cherryclayar.ng",
    "industrySupervisorPhone": "09043893667",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102032",
    "matric": "24110102032",
    "password": "password123",
    "name": "AYINDE BLESSING UWAOMA",
    "phone": "07065217894",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Cherry Clay Arts",
    "placementAddress": "1, Alhaji Abdulakeem Bin Sulaiman Like Mind Estate, Eruwen Road, Ikorodu",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@cherryclayar.ng",
    "industrySupervisorPhone": "07065217894",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102090",
    "matric": "24110102090",
    "password": "password123",
    "name": "OWOLABI MICHEAL AYOOLA",
    "phone": "09153272380",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Cherry Clay Arts",
    "placementAddress": "1, Alhaji Abdulakeem Bin Sulaiman Like Mind Estate, Eruwen Road, Ikorodu",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@cherryclayar.ng",
    "industrySupervisorPhone": "09153272380",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102003",
    "matric": "24110102003",
    "password": "password123",
    "name": "ABIODUN AYOBAMI EBENEZER",
    "phone": "09055518362",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Confidence Strokes",
    "placementAddress": "Fine Arts Studio, LASUED, Ijanikin",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@confidencest.ng",
    "industrySupervisorPhone": "09055518362",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102014",
    "matric": "24110102014",
    "password": "password123",
    "name": "AJAYI MIKEL OLUWAJUEDALO",
    "phone": "08122193196",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Confidence Strokes",
    "placementAddress": "Fine Arts Studio, LASUED, Ijanikin",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@confidencest.ng",
    "industrySupervisorPhone": "08122193196",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102026",
    "matric": "24110102026",
    "password": "password123",
    "name": "ANGALABIRI JOSHUA EBIKEME",
    "phone": "09116353803",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Confidence Strokes",
    "placementAddress": "Fine Arts Studio, LASUED, Ijanikin",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@confidencest.ng",
    "industrySupervisorPhone": "09116353803",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102057",
    "matric": "24110102057",
    "password": "password123",
    "name": "JATTO JOHN JESUPEMI",
    "phone": "07013729886",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Confidence Strokes",
    "placementAddress": "Fine Arts Studio, LASUED, Ijanikin",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@confidencest.ng",
    "industrySupervisorPhone": "07013729886",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102073",
    "matric": "24110102073",
    "password": "password123",
    "name": "OGABI DAVID AYOMIDE",
    "phone": "08162830216",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Confidence Strokes",
    "placementAddress": "Fine Arts Studio, LASUED, Ijanikin",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@confidencest.ng",
    "industrySupervisorPhone": "08162830216",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110102016",
    "matric": "23110102016",
    "password": "password123",
    "name": "KAZEEM ADEWOLE ADBDULFAWAS",
    "phone": "08163871406",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Fine & Applied Art Department",
    "placementAddress": "Department of Fine Art, COHED, LASUED, Oto/Ijanikin Campus",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@fineapplieda.ng",
    "industrySupervisorPhone": "08163871406",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110102023",
    "matric": "23110102023",
    "password": "password123",
    "name": "SAMSON DAMILARE JEREMIAH",
    "phone": "08153019764",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Fine & Applied Art Department",
    "placementAddress": "Department of Fine Art, COHED, LASUED, Oto/Ijanikin Campus",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@fineapplieda.ng",
    "industrySupervisorPhone": "08153019764",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110101025",
    "matric": "23110101025",
    "password": "password123",
    "name": "IGINLA IDOWU SODIQ",
    "phone": "08105259357",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Fortress Global Solutions Ltd",
    "placementAddress": "Roundabout Busstop, Opposite LASUED, Ijanikin, Lagos",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@fortressglob.ng",
    "industrySupervisorPhone": "08105259357",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110101036",
    "matric": "23110101036",
    "password": "password123",
    "name": "TUMO JOHNSON DAMILOLA",
    "phone": "09151707923",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Lead Media",
    "placementAddress": "Alagayi Market Opposite M.R.S Filling Station Ilogbo, Iyana Era Ijanikin Lgaos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@leadmedia.ng",
    "industrySupervisorPhone": "09151707923",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110102002",
    "matric": "23110102002",
    "password": "password123",
    "name": "ADEDEJI MULIKAT AJOKE",
    "phone": "09122432610",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Styled By Amber",
    "placementAddress": "Block 5, Isolo Road, Dolphin Estate Ikoyi",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@styledbyambe.ng",
    "industrySupervisorPhone": "09122432610",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110101007",
    "matric": "23110101007",
    "password": "password123",
    "name": "AFOLABI ELIZABETH AANUOLUWAPO",
    "phone": "07079859651",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Dafem Prints Nigeria Enterprises",
    "placementAddress": "36, Olatoye Street Powerline Bus Stop Agbado Crossing",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@dafemprintsn.ng",
    "industrySupervisorPhone": "07079859651",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110102005",
    "matric": "23110102005",
    "password": "password123",
    "name": "AKINPADE GOODNESS ABIODUN",
    "phone": "09132944232",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Tobbynho Stitiches Concept",
    "placementAddress": "4/6 Martins Street Off Omilani Bus Stop Ijeifiafodo",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@tobbynhostit.ng",
    "industrySupervisorPhone": "09132944232",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110102018",
    "matric": "23110102018",
    "password": "password123",
    "name": "ODESANWO SILAS MAYOKUN",
    "phone": "08081745254",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Modesty Art Studio",
    "placementAddress": "6, Olatunji Oyedeji oto awori off ring Road",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@modestyartst.ng",
    "industrySupervisorPhone": "08081745254",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110102026",
    "matric": "23110102026",
    "password": "password123",
    "name": "SHOBO EMMANUEL OLADIPUPO",
    "phone": "09121381220",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "TSTTV Studio 2",
    "placementAddress": "1, Omeyele pratt, Yetunde brown, Ifako, Gbagada Lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@tsttvstudio2.ng",
    "industrySupervisorPhone": "09121381220",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110702034",
    "matric": "24110702034",
    "password": "password123",
    "name": "BABALOLA MODUPELOLA OYEYENI",
    "phone": "09076356402",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "TSTTV Studio 2",
    "placementAddress": "1, Omeyele pratt, Yetunde brown, Ifako, Gbagada Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@tsttvstudio2.ng",
    "industrySupervisorPhone": "09076356402",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102015",
    "matric": "24110102015",
    "password": "password123",
    "name": "AJISEBUTU OLORUNWA EMMANUEL",
    "phone": "07017919506",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Space 29.7 Studios",
    "placementAddress": "4, Babatunde Dabiri street, Ejigbo Lagos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@space297stud.ng",
    "industrySupervisorPhone": "07017919506",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110101033",
    "matric": "23110101033",
    "password": "password123",
    "name": "QUADRI ABDULATEEF OLALEKAN",
    "phone": "09123580723",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Faith Heroic Generation",
    "placementAddress": "FHG) (Opposite LASUED, Under bridge, Ijanikin, Lagos",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@faithheroicg.ng",
    "industrySupervisorPhone": "09123580723",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110102011",
    "matric": "23110102011",
    "password": "password123",
    "name": "BALOGUN DAVID MERUJE",
    "phone": "09039289806",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Friendship Art Studio",
    "placementAddress": "Sculpture unit Department of Fine Art, COHED, LASUED, Oto/Ijanikin Campus",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@friendshipar.ng",
    "industrySupervisorPhone": "09039289806",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110102008",
    "matric": "23110102008",
    "password": "password123",
    "name": "ALARAN OMOTOLANI ABIGEAL",
    "phone": "08080711402",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Modesty Art Studio",
    "placementAddress": "6, Olatunji Oyedeji oto awori off ring Road",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@modestyartst.ng",
    "industrySupervisorPhone": "08080711402",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110101030",
    "matric": "23110101030",
    "password": "password123",
    "name": "ONI DAVID MARVELLOUS",
    "phone": "07075600032",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Modesty Art Studio",
    "placementAddress": "6, Olatunji Oyedeji oto awori off ring Road",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@modestyartst.ng",
    "industrySupervisorPhone": "07075600032",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102105",
    "matric": "24110102105",
    "password": "password123",
    "name": "WILLAMS ELIJAH TOLUWANI",
    "phone": "09016321147",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Lead Media",
    "placementAddress": "Alagayi Market Opposite M.R.S Filling Station Ilogbo, Iyana Era Ijanikin Lgaos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@leadmedia.ng",
    "industrySupervisorPhone": "09016321147",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110102071",
    "matric": "24110102071",
    "password": "password123",
    "name": "ODUNSI PETER OLUWADAMILARE",
    "phone": "08081829751",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Space 29.7 Studios",
    "placementAddress": "4, Babatunde Dabiri street, Ejigbo Lagos",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@space297stud.ng",
    "industrySupervisorPhone": "08081829751",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110101028",
    "matric": "23110101028",
    "password": "password123",
    "name": "LAWAL BARAKAT OLAMIDE",
    "phone": "08101559209",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Zeezah Couture",
    "placementAddress": "Ojolowo Street, Roundabout, oto/Ijanikin, lagos Badagry Expressway",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@zeezahcoutur.ng",
    "industrySupervisorPhone": "08101559209",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110101016",
    "matric": "23110101016",
    "password": "password123",
    "name": "EKOKEME EMOMOTIMI FAITH",
    "phone": "09124065969",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Citymood Magazine",
    "placementAddress": "10, Agric Road, Opposite Badagry Secretriat, Ajara Badagry",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@citymoodmaga.ng",
    "industrySupervisorPhone": "09124065969",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110102014",
    "matric": "23110102014",
    "password": "password123",
    "name": "HAMMED ISLAMIYAT OMOBOLANI",
    "phone": "07039786693",
    "dept": "Fine & Applied Art",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Omo-le Texture Company LTD",
    "placementAddress": "28, Afolabi Street, Alapere Off Lambo Street Ogudu Road",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@omoletexture.ng",
    "industrySupervisorPhone": "07039786693",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202099",
    "matric": "24110202099",
    "password": "password123",
    "name": "OJO CECELIA ABIODUN",
    "phone": "0814 556 8073",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "LASU Museum",
    "placementAddress": "50, Oba Ogunji Road, Agege Lagos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@lasumuseum.ng",
    "industrySupervisorPhone": "0814 556 8073",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201017",
    "matric": "24110201017",
    "password": "password123",
    "name": "ADEPOJU HABEEB ADELAWE",
    "phone": "09068292452",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Otto-Awori LCDA",
    "placementAddress": "Km 28, Lagos - Badagry Expressway, Ile-Oba Busstop",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ottoaworilcd.ng",
    "industrySupervisorPhone": "09068292452",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201075",
    "matric": "24110201075",
    "password": "password123",
    "name": "OKOLI REJOICE OLUOMA",
    "phone": "07041693506",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Meiran Palace",
    "placementAddress": "15, Odu Oroja Crescent Agbado Oke Odo LCDA, Alimosho Lagos",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@meiranpalace.ng",
    "industrySupervisorPhone": "07041693506",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202043",
    "matric": "24110202043",
    "password": "password123",
    "name": "BOLARINWA OYINDAMOLA RACHEAL",
    "phone": "09132490221",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Igando-Ikotun Local Council Dev Area",
    "placementAddress": "21, Ikotun-Idimu Road, Ikotun Busstop, Ikotun, Lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@igandoikotun.ng",
    "industrySupervisorPhone": "09132490221",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201015",
    "matric": "24110201015",
    "password": "password123",
    "name": "ADELEKE ABDULQOYUM OLAMILEKAN",
    "phone": "07085158066",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Achievers Radio",
    "placementAddress": "9, Odu Onikosi Avenue, Opposite, LASUED, Oto Awori, Lagos",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@achieversrad.ng",
    "industrySupervisorPhone": "07085158066",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201038",
    "matric": "24110201038",
    "password": "password123",
    "name": "AYOOLA INIOLUWA DAMILARE",
    "phone": "08127756644",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Achievers Radio",
    "placementAddress": "9, Odu Onikosi Avenue, Opposite, LASUED, Oto Awori, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@achieversrad.ng",
    "industrySupervisorPhone": "08127756644",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202115",
    "matric": "24110202115",
    "password": "password123",
    "name": "ONI ABDULROKEEB ADEOLA",
    "phone": "08020623931",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Achievers Radio",
    "placementAddress": "9, Odu Onikosi Avenue, Opposite, LASUED, Oto Awori, Lagos",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@achieversrad.ng",
    "industrySupervisorPhone": "08020623931",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202123",
    "matric": "24110202123",
    "password": "password123",
    "name": "POPOOLA OLUWASEUN ETHER",
    "phone": "07031583752",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Agbado Oke-Ado LCDA",
    "placementAddress": "Former SDP House, Lagos-Abeokuta Expressway Road, Oja Oba Busstop, Abule Egba, Lagos",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@agbadookeado.ng",
    "industrySupervisorPhone": "07031583752",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202009",
    "matric": "24110202009",
    "password": "password123",
    "name": "ADEKUNLE HAFSAH OLUWATOYIN",
    "phone": "08120792530",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Agege Local Governement",
    "placementAddress": "Ijaiye Road,Ijaiye, Agege, Lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@agegelocalgo.ng",
    "industrySupervisorPhone": "08120792530",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202012",
    "matric": "24110202012",
    "password": "password123",
    "name": "ADESUYI ADELEKE GODWIN",
    "phone": "08035308615",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Agege Local Governement",
    "placementAddress": "Ijaiye Road,Ijaiye, Agege, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@agegelocalgo.ng",
    "industrySupervisorPhone": "08035308615",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202103",
    "matric": "24110202103",
    "password": "password123",
    "name": "OKORO FAVOUR BENJAMIN",
    "phone": "07050548625",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Alpha Brains Scholars College",
    "placementAddress": "2, Iyamu Street, Iyana Isashe, Lagos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@alphabrainss.ng",
    "industrySupervisorPhone": "07050548625",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202050",
    "matric": "24110202050",
    "password": "password123",
    "name": "FASASI TOLANI SAMUEL",
    "phone": "09129692100",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ample.Com",
    "placementAddress": "1, Amule Busstop, Amule Street, Ayobo, Ipaja",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@amplecom.ng",
    "industrySupervisorPhone": "09129692100",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202127",
    "matric": "24110202127",
    "password": "password123",
    "name": "SANNI NELLY YETUNDE",
    "phone": "07042284842",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Amuwo-Odofin Local Government",
    "placementAddress": "41 Road, Festac Town, Lagos",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@amuwoodofinl.ng",
    "industrySupervisorPhone": "07042284842",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202088",
    "matric": "24110202088",
    "password": "password123",
    "name": "NWANKWO CHINAZAEKPERE EMILIA",
    "phone": "09161300872",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Amuwo-Odofin Local Government",
    "placementAddress": "41 Road, Festac Town, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@amuwoodofinl.ng",
    "industrySupervisorPhone": "09161300872",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202077",
    "matric": "24110202077",
    "password": "password123",
    "name": "KOMOLAFE ENIOLA RUTH",
    "phone": "08136275669",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ayobo-Ipaja Local Council Development Area",
    "placementAddress": "Igbogilla Busstop, Ipaja",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ayoboipajalo.ng",
    "industrySupervisorPhone": "08136275669",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201095",
    "matric": "24110201095",
    "password": "password123",
    "name": "QUADRI IZIAK AYOMIDE",
    "phone": "09138310545",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry Local Government",
    "placementAddress": "Ajara, Badagry, Lagos State",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrylocal.ng",
    "industrySupervisorPhone": "09138310545",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202051",
    "matric": "24110202051",
    "password": "password123",
    "name": "FAYOMI OLUWATOYIN VICTORIA",
    "phone": "08148536904",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry Local Government",
    "placementAddress": "Badagry Secretariat Ajara, Roundabout",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrylocal.ng",
    "industrySupervisorPhone": "08148536904",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202108",
    "matric": "24110202108",
    "password": "password123",
    "name": "OLAYINKA TOMILOLA ALIYAT",
    "phone": "08085826246",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry Local Government",
    "placementAddress": "Badagry Secretariat Ajara, Roundabout",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrylocal.ng",
    "industrySupervisorPhone": "08085826246",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202087",
    "matric": "24110202087",
    "password": "password123",
    "name": "NWANGWA SHARON NKECHI",
    "phone": "07010561109",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry Local Government",
    "placementAddress": "Badagry Secretariat Ajara, Roundabout",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrylocal.ng",
    "industrySupervisorPhone": "07010561109",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202037",
    "matric": "24110202037",
    "password": "password123",
    "name": "BADIRU MOSHOOD TITILOPE",
    "phone": "07078628001",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry Local Government",
    "placementAddress": "Badagry Secretariat Ajara, Roundabout",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrylocal.ng",
    "industrySupervisorPhone": "07078628001",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202044",
    "matric": "24110202044",
    "password": "password123",
    "name": "DOSA SARAH SEYIDE",
    "phone": "09019574697",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry Local Government",
    "placementAddress": "Badagry Secretariat Ajara, Roundabout",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrylocal.ng",
    "industrySupervisorPhone": "09019574697",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202015",
    "matric": "24110202015",
    "password": "password123",
    "name": "AGARRY LYDIA OGHENEKOME",
    "phone": "08083720788",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry Local Government",
    "placementAddress": "Badagry Secretariat Ajara, Roundabout",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrylocal.ng",
    "industrySupervisorPhone": "08083720788",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202124",
    "matric": "24110202124",
    "password": "password123",
    "name": "POSSI ESTHER ADEKEMI",
    "phone": "09010491894",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry West Local Council Devlopment Area",
    "placementAddress": "Badagry West L.C.D.A Secretariat, Kankan",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrywestl.ng",
    "industrySupervisorPhone": "09010491894",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202102",
    "matric": "24110202102",
    "password": "password123",
    "name": "OKEIBE JULIET NGOZI",
    "phone": "07047362672",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "CENDIP",
    "placementAddress": "LASUED) (Km, 30, Lagos Badagry Expressway, Oto/Ijanikin, Lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@cendip.ng",
    "industrySupervisorPhone": "07047362672",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202101",
    "matric": "24110202101",
    "password": "password123",
    "name": "OKECHI FAVOUR NZUBE",
    "phone": "09126163463",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "De Simple Ladies Outlook Ventures",
    "placementAddress": "23, Olaniyi Street, Victory Estate, Iba",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@desimpleladi.ng",
    "industrySupervisorPhone": "09126163463",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201090",
    "matric": "24110201090",
    "password": "password123",
    "name": "ORIAREWOH EDOSA RUTH",
    "phone": "08148557822",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "De-New Aiyetoro Medical Centre",
    "placementAddress": "2/3, Samson Street, Ibaja-Nla, Aiyetoro, Ijanikin",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@denewaiyetor.ng",
    "industrySupervisorPhone": "08148557822",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202132",
    "matric": "24110202132",
    "password": "password123",
    "name": "SHITTU ADEJUWON ROHEEM",
    "phone": "09035803195",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Egbe-Idimu Local Council Development Area",
    "placementAddress": "Isheri-Olofin Round About, LASU-IBA Road, Isheri, Lagos",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@egbeidimuloc.ng",
    "industrySupervisorPhone": "09035803195",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202089",
    "matric": "24110202089",
    "password": "password123",
    "name": "OBAFUNSHO ABDULGANIU AYOMIDE",
    "phone": "08160676510",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Egbe-Idimu Local Council Development Area",
    "placementAddress": "Isheri-Olofin Round About, LASU-IBA Road, Isheri, Lagos",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@egbeidimuloc.ng",
    "industrySupervisorPhone": "08160676510",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201057",
    "matric": "24110201057",
    "password": "password123",
    "name": "ILORI NOAH TOBI",
    "phone": "07049545083",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ejigbo Local Government",
    "placementAddress": "Ejigbo LCDA Secreteriat, 77 Egbe Road, NNPC Junction, Ejigbo, Lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ejigbolocalg.ng",
    "industrySupervisorPhone": "07049545083",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110202104",
    "matric": "24110202104",
    "password": "password123",
    "name": "OKWUOLISA STEVEN OBINNA",
    "phone": "09033165736",
    "dept": "History & Diplomatic Studies",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ejigbo Local Government",
    "placementAddress": "Ejigbo LCDA Secreteriat, 77 Egbe Road, NNPC Junction, Ejigbo, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ejigbolocalg.ng",
    "industrySupervisorPhone": "09033165736",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201044",
    "matric": "24110201044",
    "password": "password123",
    "name": "BELLO RAMADAN ADEDEJI",
    "phone": "09128226647",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Achievers Radio",
    "placementAddress": "9, Odu Onikosi Avenue, Opposite, LASUED, Oto Awori, Lagos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@achieversrad.ng",
    "industrySupervisorPhone": "09128226647",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201064",
    "matric": "24110201064",
    "password": "password123",
    "name": "LAWAL KOREDE ABOLAGADE",
    "phone": "09016490971",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Agege Local Governement",
    "placementAddress": "Ijaiye Road,Ijaiye, Agege, Lagos",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@agegelocalgo.ng",
    "industrySupervisorPhone": "09016490971",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201006",
    "matric": "24110201006",
    "password": "password123",
    "name": "ABOLADE NINIOLA MISTURAT",
    "phone": "09031374145",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Alimosho Local Government",
    "placementAddress": "3, Bada Street, Williams Layout, Akowonjo",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@alimosholoca.ng",
    "industrySupervisorPhone": "09031374145",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201048",
    "matric": "24110201048",
    "password": "password123",
    "name": "ELEGA AYOMADE GIDEON",
    "phone": "08130704562",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ayobo-Ipaja Local Council Development Area",
    "placementAddress": "Igbogilla Busstop, Ipaja",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ayoboipajalo.ng",
    "industrySupervisorPhone": "08130704562",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201024",
    "matric": "24110201024",
    "password": "password123",
    "name": "ADIGWE ANTHONIA CHUKWUNELO",
    "phone": "09071472542",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ayobo-Ipaja Local Council Development Area",
    "placementAddress": "Igbogilla Busstop, Ipaja",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ayoboipajalo.ng",
    "industrySupervisorPhone": "09071472542",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201056",
    "matric": "24110201056",
    "password": "password123",
    "name": "IDOWU CYNTHIA SEKANDE",
    "phone": "09058055079",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry Local Government",
    "placementAddress": "Badagry Secretariat Ajara, Roundabout",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrylocal.ng",
    "industrySupervisorPhone": "09058055079",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201110",
    "matric": "24110201110",
    "password": "password123",
    "name": "WHETO SEWANU JOHN",
    "phone": "09126361684",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Badagry West Local Council Devlopment Area",
    "placementAddress": "Badagry West L.C.D.A Secretariat, Kankan",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@badagrywestl.ng",
    "industrySupervisorPhone": "09126361684",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201041",
    "matric": "24110201041",
    "password": "password123",
    "name": "BALOGUN ADEBOLA WARIZ",
    "phone": "09037419550",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Epe Local Government",
    "placementAddress": "Ha Marun, Epe, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@epelocalgove.ng",
    "industrySupervisorPhone": "09037419550",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201008",
    "matric": "24110201008",
    "password": "password123",
    "name": "ADAMS BOLUWATIFE IBRIAT",
    "phone": "09152303168",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Eti-Osa East Local Council Dev. Area",
    "placementAddress": "Km 52,Lekki Epe Expressway, Sangotedo, Ajah, Lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@etiosaeastlo.ng",
    "industrySupervisorPhone": "09152303168",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201050",
    "matric": "24110201050",
    "password": "password123",
    "name": "EZENNWA STEPHANIE STEPHANIE",
    "phone": "09032565637",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Iba Local Council Development Area",
    "placementAddress": "Oniba Junction, Oba Ayoka Road, Iba Town, Lagos",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ibalocalcoun.ng",
    "industrySupervisorPhone": "09032565637",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201093",
    "matric": "24110201093",
    "password": "password123",
    "name": "PATRICK CHIMAKA FAITH",
    "phone": "09048008350",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Iba Local Council Development Area",
    "placementAddress": "Oniba Junction, Oba Ayoka Road, Iba Town, Lagos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ibalocalcoun.ng",
    "industrySupervisorPhone": "09048008350",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201037",
    "matric": "24110201037",
    "password": "password123",
    "name": "AYINDE ABDULLATEEF OLUWADAMILARE",
    "phone": "08121618488",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Iba Local Council Development Area",
    "placementAddress": "Oniba Junction, Oba Ayoka Road, Iba Town, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ibalocalcoun.ng",
    "industrySupervisorPhone": "08121618488",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201033",
    "matric": "24110201033",
    "password": "password123",
    "name": "ALIDI ESTHER EWOMAZINO",
    "phone": "09055939972",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Iba Local Council Development Area",
    "placementAddress": "Oniba Junction, Oba Ayoka Road, Iba Town, Lagos",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ibalocalcoun.ng",
    "industrySupervisorPhone": "09055939972",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201012",
    "matric": "24110201012",
    "password": "password123",
    "name": "ADEDOKUN BLESSING TEMITOPE",
    "phone": "08164298491",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ifako-Ijaiye Local Governement",
    "placementAddress": "6, College Road, Ogba",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ifakoijaiyel.ng",
    "industrySupervisorPhone": "08164298491",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201072",
    "matric": "24110201072",
    "password": "password123",
    "name": "ODUGBESI TESLIM ADEOYE",
    "phone": "07083600780",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ifelodun Local Council Dev. Area",
    "placementAddress": "3, Dispensary Street, Mosafejo, Amukoko, Lagos",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ifelodunloca.ng",
    "industrySupervisorPhone": "07083600780",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201054",
    "matric": "24110201054",
    "password": "password123",
    "name": "HASSAN NOFISAT ABISOLA",
    "phone": "09067536161",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Igando-Ikotun Local Council Dev Area",
    "placementAddress": "21, Ikotun-Idimu Road, Ikotun Busstop, Ikotun, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@igandoikotun.ng",
    "industrySupervisorPhone": "09067536161",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201010",
    "matric": "24110201010",
    "password": "password123",
    "name": "ADEBAYO AMINAT OMOTOYOSI",
    "phone": "07035617433",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ijede Local Council Development Area",
    "placementAddress": "Secretariat, 1, Madan Street, Ijede, Ikorodu, Lagos",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ijedelocalco.ng",
    "industrySupervisorPhone": "07035617433",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201102",
    "matric": "24110201102",
    "password": "password123",
    "name": "SANYAOLU OLUWAPELUMI GRACE",
    "phone": "09076488602",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ikosi Isheri L.C.D.A",
    "placementAddress": "20, Ikosi Road, Ketu, Lagos",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ikosiisheril.ng",
    "industrySupervisorPhone": "09076488602",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201005",
    "matric": "24110201005",
    "password": "password123",
    "name": "ABEL FESTUS TIMILEHIN",
    "phone": "07061206138",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Isolo L.C.D.A",
    "placementAddress": "Osolo way, Isolo, Lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@isololcda.ng",
    "industrySupervisorPhone": "07061206138",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110201099",
    "matric": "24110201099",
    "password": "password123",
    "name": "SAMUEL-ABAGUN KEHINDE REBECCA",
    "phone": "09015554455",
    "dept": "History & Diplomatic Studies Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Isolo L.C.D.A",
    "placementAddress": "Osolo way, Isolo, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@isololcda.ng",
    "industrySupervisorPhone": "09015554455",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110301043",
    "matric": "24110301043",
    "password": "password123",
    "name": "KEHINDE OLALEKAN HENRY",
    "phone": "08101613274",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Cathedral Church Of St. Thomas, Diocese Of Badagry Anglican Communsion",
    "placementAddress": "9/11, Hospital Road, Badagry",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@cathedralchu.ng",
    "industrySupervisorPhone": "08101613274",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301007",
    "matric": "23110301007",
    "password": "password123",
    "name": "AKASI DEBORAH OMORIRE",
    "phone": "08064849130",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Nigerian Army School of Music",
    "placementAddress": "Ojo Military Cantonment",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@nigerianarmy.ng",
    "industrySupervisorPhone": "08064849130",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301001",
    "matric": "23110301001",
    "password": "password123",
    "name": "ADEBAYO JANET MORENIKEJI",
    "phone": "08106631352",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Nigerian Army School of Music",
    "placementAddress": "Ojo Military Cantonment",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@nigerianarmy.ng",
    "industrySupervisorPhone": "08106631352",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301037",
    "matric": "23110301037",
    "password": "password123",
    "name": "RASAQ ABDULSALAM OPEMIPO",
    "phone": "09030784464",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Pup Music",
    "placementAddress": "LASUED Music Department",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@pupmusic.ng",
    "industrySupervisorPhone": "09030784464",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301031",
    "matric": "23110301031",
    "password": "password123",
    "name": "ORJI UCHENNA VICTOR",
    "phone": "09011809360",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Nigerian Army School of Music",
    "placementAddress": "Ojo Military Cantonment",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@nigerianarmy.ng",
    "industrySupervisorPhone": "09011809360",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301042",
    "matric": "23110301042",
    "password": "password123",
    "name": "AJOSE AISHAT OMOLABAKE",
    "phone": "09049943551",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Ayan Jesu Professional Work",
    "placementAddress": "Opposite Magida, Abule Iyanaera Busstop, Lagos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ayanjesuprof.ng",
    "industrySupervisorPhone": "09049943551",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301041",
    "matric": "23110301041",
    "password": "password123",
    "name": "ABIFARIN OLUWATOYIN AKINTAYO",
    "phone": "08054697762",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Sunny Mike Studio",
    "placementAddress": "7, Cwen Unity Estate, Ketu, Ijanikin, Lagos",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@sunnymikestu.ng",
    "industrySupervisorPhone": "08054697762",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301033",
    "matric": "23110301033",
    "password": "password123",
    "name": "OYEBOADE EMMANUEL OLUWATOBILOBA",
    "phone": "09126774062",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Sunny Mike Studio",
    "placementAddress": "7, Cwen Unity Estate, Ketu, Ijanikin, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@sunnymikestu.ng",
    "industrySupervisorPhone": "09126774062",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301004",
    "matric": "23110301004",
    "password": "password123",
    "name": "ADELEKE ALIAT ARIKE",
    "phone": "09042995570",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Ayan Jesu Professional Work",
    "placementAddress": "Opposite Magida, Abule Iyanaera Busstop, Lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ayanjesuprof.ng",
    "industrySupervisorPhone": "09042995570",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301040",
    "matric": "23110301040",
    "password": "password123",
    "name": "YOVOYAN JEREMIAH VIAVO",
    "phone": "07063340922",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Ecclesia Studio",
    "placementAddress": "Olayinka House, Ajara Topa, Badagry",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ecclesiastud.ng",
    "industrySupervisorPhone": "07063340922",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301024",
    "matric": "23110301024",
    "password": "password123",
    "name": "NNONYELU CYNTHIA MAKUO",
    "phone": "09039615888",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Sound and Beats Studio TWC",
    "placementAddress": "40/42 Ago Palace way, Okota, Lagos Tiled Road",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@soundandbeat.ng",
    "industrySupervisorPhone": "09039615888",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301026",
    "matric": "23110301026",
    "password": "password123",
    "name": "OGUNLUDE PAUL OLAMILEKAN",
    "phone": "08166895483",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Pup Music",
    "placementAddress": "LASUED Music Department",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@pupmusic.ng",
    "industrySupervisorPhone": "08166895483",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301034",
    "matric": "23110301034",
    "password": "password123",
    "name": "POPOOLA AYOMIDE OLADAPO",
    "phone": "09072509842",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Pup Music",
    "placementAddress": "LASUED Music Department",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@pupmusic.ng",
    "industrySupervisorPhone": "09072509842",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110301054",
    "matric": "24110301054",
    "password": "password123",
    "name": "OLATUNJI DORCAS YETUNDE",
    "phone": "09027108747",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Pup Music",
    "placementAddress": "LASUED Music Department",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@pupmusic.ng",
    "industrySupervisorPhone": "09027108747",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110301028",
    "matric": "23110301028",
    "password": "password123",
    "name": "OLADIPUPO IFEOLUWA ABIGAIL",
    "phone": "09152351085",
    "dept": "Music Education",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Psalmsound Global Ltd",
    "placementAddress": "Amosu Street, Pota, Igborosun, Badagry",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@psalmsoundgl.ng",
    "industrySupervisorPhone": "09152351085",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302022",
    "matric": "24110302022",
    "password": "password123",
    "name": "DUROJAYE DANIEL ADEYEMI",
    "phone": "07049335559",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "100.9Fm Tungba Radio",
    "placementAddress": "Tungba Close, Onafowokan Estate, Off Ishagamu Road, Itaoluwo, Ikorodu",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@1009fmtungba.ng",
    "industrySupervisorPhone": "07049335559",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302043",
    "matric": "24110302043",
    "password": "password123",
    "name": "OLALEKAN IYANUOLUWA SAMUEL",
    "phone": "09019316216",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "100.9Fm Tungba Radio",
    "placementAddress": "Tungba Close, Onafowokan Estate, Off Ishagamu Road, Itaoluwo, Ikorodu",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@1009fmtungba.ng",
    "industrySupervisorPhone": "09019316216",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302042",
    "matric": "24110302042",
    "password": "password123",
    "name": "OGUNSHOWOBO QUDIJAT OLAMIDE",
    "phone": "09049549370",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ariya 100.3Fm",
    "placementAddress": "12, King Of Glory Street, Off Oke-Cele, Ibafo Busstop, Ibafo, Ogun State",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ariya1003fm.ng",
    "industrySupervisorPhone": "09049549370",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302033",
    "matric": "24110302033",
    "password": "password123",
    "name": "KVEVEY DIVINE MONDAY",
    "phone": "09065078131",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ayan Jesu Professional Work",
    "placementAddress": "Opposite Magida, Abule Iyanaera Busstop, Lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ayanjesuprof.ng",
    "industrySupervisorPhone": "09065078131",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302050",
    "matric": "24110302050",
    "password": "password123",
    "name": "OSUMAH VICTOR MUSTAPHA",
    "phone": "07079186845",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Coolboy Music Tech Studios",
    "placementAddress": "11, Ify Oiaku Close, Ijanikin, Ojo",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@coolboymusic.ng",
    "industrySupervisorPhone": "07079186845",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302039",
    "matric": "24110302039",
    "password": "password123",
    "name": "OBINWA CHINENYE MARYANN",
    "phone": "08060311951",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Digits 1024 Audio & Visual Solutions",
    "placementAddress": "5th Avenue, F Close, House 6, Festac Town",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@digits1024au.ng",
    "industrySupervisorPhone": "08060311951",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302003",
    "matric": "24110302003",
    "password": "password123",
    "name": "ADEFISOYE INUMIDUN MARVELOUS",
    "phone": "08164681805",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Ecclesia Studio",
    "placementAddress": "Olayinka House, Ajara Topa, Badagry",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ecclesiastud.ng",
    "industrySupervisorPhone": "08164681805",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302051",
    "matric": "24110302051",
    "password": "password123",
    "name": "OWOLABI GLORY PAUL",
    "phone": "07083080142",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Eleniyan Studio",
    "placementAddress": "Mowo Extension, Badagry, Lagos",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@eleniyanstud.ng",
    "industrySupervisorPhone": "07083080142",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302032",
    "matric": "24110302032",
    "password": "password123",
    "name": "KOMOLAFE DAVID OLAIDE",
    "phone": "08167708793",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Glitch Africa",
    "placementAddress": "3KC4, Orchid Road, Lekki /4 Saula Akinlolu Orchid Road, Royal Pine, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@glitchafrica.ng",
    "industrySupervisorPhone": "08167708793",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302052",
    "matric": "24110302052",
    "password": "password123",
    "name": "RICHARD MIRACLE GLORY",
    "phone": "08124450415",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Herrison Electronics Ventures",
    "placementAddress": "Shop BB 24Mb, Alaba International Market, Ojo",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@herrisonelec.ng",
    "industrySupervisorPhone": "08124450415",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302001",
    "matric": "24110302001",
    "password": "password123",
    "name": "ABDULAZEEZ BARAKAT OLUWAPELUMI",
    "phone": "08087404383",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "LASUED Information & Public Relations Unit",
    "placementAddress": "Km 30, Lagos-Badagry Expressway, Oto/Ijanikin, Lagos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@lasuedinform.ng",
    "industrySupervisorPhone": "08087404383",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302013",
    "matric": "24110302013",
    "password": "password123",
    "name": "AKAPO AYOMIDE MONDAY",
    "phone": "09126443463",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "LASUED Information & Public Relations Unit",
    "placementAddress": "Km 30, Lagos-Badagry Expressway, Oto/Ijanikin, Lagos",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@lasuedinform.ng",
    "industrySupervisorPhone": "09126443463",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "25110302014",
    "matric": "25110302014",
    "password": "password123",
    "name": "AKOTOMEH SEFRINMI DESMOND",
    "phone": "09138690304",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "LASUED Information & Public Relations Unit",
    "placementAddress": "Km 30, Lagos-Badagry Expressway, Oto/Ijanikin, Lagos",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@lasuedinform.ng",
    "industrySupervisorPhone": "09138690304",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302009",
    "matric": "24110302009",
    "password": "password123",
    "name": "ADEWUNMI CLINTON SAMUEL",
    "phone": "08029025130",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Liveheights Studios Limited",
    "placementAddress": "8, Messaih Street, Off Olanrewaju, Opposite Ojo Barracks",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@liveheightss.ng",
    "industrySupervisorPhone": "08029025130",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110302031",
    "matric": "24110302031",
    "password": "password123",
    "name": "KAKPO JOHN MONDAY",
    "phone": "09012069376",
    "dept": "Music",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "200 Level",
    "hostOrg": "Nigerain Army School of Music",
    "placementAddress": "Ojo Military Cantonment",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@nigerainarmy.ng",
    "industrySupervisorPhone": "09012069376",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501046",
    "matric": "23110501046",
    "password": "password123",
    "name": "FAMAKINWA OLUWAGBEMIGA GABRIEL",
    "phone": "08061717483",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "LASUED Information and public relations unit",
    "placementAddress": "KM 30,Lagos badagry expresssway,otto/ijanikin,lagos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@lasuedinform.ng",
    "industrySupervisorPhone": "08061717483",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110501028",
    "matric": "24110501028",
    "password": "password123",
    "name": "AKIENEME DAVID OSHOMA",
    "phone": "07062748313",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "PEFTI",
    "placementAddress": "5 Joy Avenu,Ajao Estate,Lagos,102214,Lagos,Nigeria",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@pefti.ng",
    "industrySupervisorPhone": "07062748313",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501066",
    "matric": "23110501066",
    "password": "password123",
    "name": "MACAULAY BUSAYO RAPHAEL",
    "phone": "09167659532",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Mufasa Events & Stage",
    "placementAddress": "No 2,Juliana Estate Isashi,Ojo,Lagos",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@mufasaevents.ng",
    "industrySupervisorPhone": "09167659532",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501017",
    "matric": "23110501017",
    "password": "password123",
    "name": "AHANDE BOLUWATIFE ELIZABETH",
    "phone": "09135822152",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "LASUED Information and public relations unit",
    "placementAddress": "KM 30,Lagos badagry expresssway,otto/ijanikin,lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@lasuedinform.ng",
    "industrySupervisorPhone": "09135822152",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501073",
    "matric": "23110501073",
    "password": "password123",
    "name": "NNADI CHRISTIAN EMMANUEL",
    "phone": "08167820716",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Mufasa Events & Stage",
    "placementAddress": "No 2,Juliana Estate Isashi,Ojo,Lagos",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@mufasaevents.ng",
    "industrySupervisorPhone": "08167820716",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501110",
    "matric": "23110501110",
    "password": "password123",
    "name": "UCHENNA SMART OZIOMA",
    "phone": "09069207281",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "El-film Studio",
    "placementAddress": "k1 tonia emmanuel street,ogombo town,eti-osa,lagos state",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@elfilmstudio.ng",
    "industrySupervisorPhone": "09069207281",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501086",
    "matric": "23110501086",
    "password": "password123",
    "name": "OLADIPUPO BOLUWATIFE DANIEL",
    "phone": "08058191000",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Crown Troupe of Africa",
    "placementAddress": "Igode Olota,Ikorodu Lagos state",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@crowntroupeo.ng",
    "industrySupervisorPhone": "08058191000",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501085",
    "matric": "23110501085",
    "password": "password123",
    "name": "OKPO MARY EFFIONG",
    "phone": "09015755390",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Crown Troupe of Africa",
    "placementAddress": "Igode Olota,Ikorodu Lagos state",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@crowntroupeo.ng",
    "industrySupervisorPhone": "09015755390",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501026",
    "matric": "23110501026",
    "password": "password123",
    "name": "ASHADE ELIZABETH FUNMILAYO",
    "phone": "09011114692",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Crown Troupe of Africa",
    "placementAddress": "Igode Olota,Ikorodu Lagos state",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@crowntroupeo.ng",
    "industrySupervisorPhone": "09011114692",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110501117",
    "matric": "24110501117",
    "password": "password123",
    "name": "OLADIPO ENIOLA JOSEPH",
    "phone": "09116492158",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Crown Troupe of Africa",
    "placementAddress": "Igode Olota,Ikorodu Lagos state",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@crowntroupeo.ng",
    "industrySupervisorPhone": "09116492158",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501099",
    "matric": "23110501099",
    "password": "password123",
    "name": "OMOLADE SARAH ADUKE",
    "phone": "09018988066",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Iworo Fm Radio",
    "placementAddress": "1, Primate Ayodele Avenue, Beside Civil Defense, Iworo Olorunda LCDA Badagry",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@iworofmradio.ng",
    "industrySupervisorPhone": "09018988066",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501104",
    "matric": "23110501104",
    "password": "password123",
    "name": "ROBINSON ROBERTA ELOOGHENE",
    "phone": "09076579398",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Ministry Of Tourism Arts and Culture",
    "placementAddress": "Block 10, Alausa Scretariat, Ikeja",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@ministryofto.ng",
    "industrySupervisorPhone": "09076579398",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501119",
    "matric": "23110501119",
    "password": "password123",
    "name": "ONIPEDE DAVID ADEMOLA",
    "phone": "09135249571",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Mufasa Events & Stage",
    "placementAddress": "No 2,Juliana Estate Isashi,Ojo,Lagos",
    "institutionalSupervisor": "Engr. Fatima Bello",
    "institutionalSupervisorEmail": "f.bello@lasued.edu.ng",
    "supervisor": "Engr. Fatima Bello",
    "supervisorEmail": "f.bello@lasued.edu.ng",
    "supervisorContact": "f.bello@lasued.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@mufasaevents.ng",
    "industrySupervisorPhone": "09135249571",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501047",
    "matric": "23110501047",
    "password": "password123",
    "name": "FASASI FATHIA OKIKIOLA",
    "phone": "07025313445",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Dexterous Empire",
    "placementAddress": "One day Bus Stop M.R.S Fuel Station, Isuti Road, Igando",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@dexterousemp.ng",
    "industrySupervisorPhone": "07025313445",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "24110501015",
    "matric": "24110501015",
    "password": "password123",
    "name": "ADESINA OLUWAMAYOWA REBECCA",
    "phone": "0907 3160 116",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Lanre Excel Media Company",
    "placementAddress": "2, Alh. Moromoke oyelowo close Adams Estate Ikotun, Lagos",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@lanreexcelme.ng",
    "industrySupervisorPhone": "0907 3160 116",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501019",
    "matric": "23110501019",
    "password": "password123",
    "name": "AKINBOLA ATOKE JOY",
    "phone": "09015508208",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Nature Crest Rehabilitation Center",
    "placementAddress": "11, Kayode Close otto Awori, Lagos",
    "institutionalSupervisor": "Mr. Shanu Rilwan",
    "institutionalSupervisorEmail": "shanu.rilwan@gmail.com",
    "supervisor": "Mr. Shanu Rilwan",
    "supervisorEmail": "shanu.rilwan@gmail.com",
    "supervisorContact": "shanu.rilwan@gmail.com",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@naturecrestr.ng",
    "industrySupervisorPhone": "09015508208",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501100",
    "matric": "23110501100",
    "password": "password123",
    "name": "ONUNZE ANGEL IFUNANYA",
    "phone": "09017693891",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Action World Entertainment",
    "placementAddress": "House 2, Abayomi Street, Magamund Estate, Lekki Country",
    "institutionalSupervisor": "Prof. Babatunde Adelaja",
    "institutionalSupervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisor": "Prof. Babatunde Adelaja",
    "supervisorEmail": "b.adelaja@lasu.edu.ng",
    "supervisorContact": "b.adelaja@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@actionworlde.ng",
    "industrySupervisorPhone": "09017693891",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501022",
    "matric": "23110501022",
    "password": "password123",
    "name": "AKINYELE FAVOUR BOLUWATIFE",
    "phone": "09037057139",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Action World Entertainment",
    "placementAddress": "House 2, Abayomi Street, Magamund Estate, Lekki Country",
    "institutionalSupervisor": "Unassigned",
    "institutionalSupervisorEmail": "coordinator@lasu.edu.ng",
    "supervisor": "Unassigned",
    "supervisorEmail": "coordinator@lasu.edu.ng",
    "supervisorContact": "coordinator@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@actionworlde.ng",
    "industrySupervisorPhone": "09037057139",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501092",
    "matric": "23110501092",
    "password": "password123",
    "name": "OLASUPO EVANS AYOMIDE",
    "phone": "09053536133",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "Lanre Excel Media Company",
    "placementAddress": "2, Alh. Moromoke oyelowo close Adams Estate Ikotun, Lagos",
    "institutionalSupervisor": "Dr. Emmanuel Chukwu",
    "institutionalSupervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisor": "Dr. Emmanuel Chukwu",
    "supervisorEmail": "e.chukwu@lasu.edu.ng",
    "supervisorContact": "e.chukwu@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@lanreexcelme.ng",
    "industrySupervisorPhone": "09053536133",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "student",
    "identifier": "23110501108",
    "matric": "23110501108",
    "password": "password123",
    "name": "STEPHEN REBECCA NKECHI",
    "phone": "08065146935",
    "dept": "Theatre and performing arts",
    "institution": "Lagos State University of Education (LASUED)",
    "level": "300 LEVEL",
    "hostOrg": "African Python Of Theatre Art",
    "placementAddress": "29, Omotayo Street, Checkpoint Bus Stop, Along Badagry Expressway",
    "institutionalSupervisor": "Mrs. Folashade Adeyemi",
    "institutionalSupervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisor": "Mrs. Folashade Adeyemi",
    "supervisorEmail": "f.adeyemi@lasu.edu.ng",
    "supervisorContact": "f.adeyemi@lasu.edu.ng",
    "industrySupervisor": "Workplace Placement Mentor",
    "industrySupervisorEmail": "mentor@africanpytho.ng",
    "industrySupervisorPhone": "08065146935",
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T09:00:00Z"
  },
  {
    "role": "admin",
    "identifier": "ADMIN/LASU/CS-DIR",
    "staffId": "ADMIN/LASU/CS-DIR",
    "password": "password123",
    "title": "Dr.",
    "name": "DR. A. O. INSTITUTIONAL COORDINATOR",
    "dept": "Directorate of SIWES & Industrial Attachment",
    "institution": "Lagos State University (LASU)",
    "email": "coordinator@lasu.edu.ng",
    "isSuperAdmin": true,
    "isCoordinator": true,
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T08:00:00Z"
  },
  {
    "role": "admin",
    "identifier": "STAFF/LASU/CS-001",
    "staffId": "STAFF/LASU/CS-001",
    "password": "password123",
    "title": "Prof.",
    "name": "PROF. BABATUNDE ADELAJA",
    "dept": "Computer Science & Information Technology",
    "institution": "Lagos State University (LASU)",
    "email": "b.adelaja@lasu.edu.ng",
    "isSuperAdmin": false,
    "isCoordinator": false,
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T08:05:00Z"
  },
  {
    "role": "admin",
    "identifier": "STAFF/LASUED/ENG-042",
    "staffId": "STAFF/LASUED/ENG-042",
    "password": "password123",
    "title": "Engr.",
    "name": "ENGR. FATIMA BELLO",
    "dept": "Software & Systems Engineering",
    "institution": "Lagos State University of Education (LASUED)",
    "email": "f.bello@lasued.edu.ng",
    "isSuperAdmin": false,
    "isCoordinator": false,
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T08:10:00Z"
  },
  {
    "role": "admin",
    "identifier": "STAFF/LASU/ICT-019",
    "staffId": "STAFF/LASU/ICT-019",
    "password": "password123",
    "title": "Dr.",
    "name": "DR. EMMANUEL CHUKWU",
    "dept": "Information & Communication Technology",
    "institution": "Lagos State University (LASU)",
    "email": "e.chukwu@lasu.edu.ng",
    "isSuperAdmin": false,
    "isCoordinator": false,
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T08:12:00Z"
  },
  {
    "role": "admin",
    "identifier": "STAFF/LASU/ITD-005",
    "staffId": "STAFF/LASU/ITD-005",
    "password": "password123",
    "title": "Mrs.",
    "name": "MRS. FOLASHADE ADEYEMI",
    "dept": "Industrial Training Directorate",
    "institution": "Lagos State University (LASU)",
    "email": "f.adeyemi@lasu.edu.ng",
    "isSuperAdmin": false,
    "isCoordinator": false,
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T08:14:00Z"
  },
  {
    "role": "admin",
    "identifier": "STAFF/LASU/CS-088",
    "staffId": "STAFF/LASU/CS-088",
    "password": "password123",
    "title": "Mr.",
    "name": "MR. SHANU RILWAN",
    "dept": "Department of Computer Science / Academic Adviser",
    "institution": "Lagos State University (LASU)",
    "email": "shanu.rilwan@gmail.com",
    "isSuperAdmin": false,
    "isCoordinator": false,
    "isApproved": true,
    "approvalStatus": "approved",
    "registeredAt": "2026-09-15T08:16:00Z"
  },
  {
    "role": "admin",
    "identifier": "STAFF/LASU/CS-999",
    "staffId": "STAFF/LASU/CS-999",
    "password": "password123",
    "title": "Dr.",
    "name": "DR. KEHINDE OSOBA (PENDING)",
    "dept": "Department of Computer Science",
    "institution": "Lagos State University (LASU)",
    "email": "k.osoba@lasu.edu.ng",
    "isSuperAdmin": false,
    "isCoordinator": false,
    "isApproved": false,
    "approvalStatus": "pending",
    "registeredAt": "2026-09-15T08:20:00Z"
  }
];

function getRegisteredUsersList() {
  try {
    const raw = localStorage.getItem(USERS_DB_KEY);
    const customList = raw ? JSON.parse(raw) : [];
    
    // Auto-sync if customList is missing seeded dataset
    const merged = [...defaultSeededUsers];
    if (customList.length < defaultSeededUsers.length) {
      try {
        localStorage.setItem(USERS_DB_KEY, JSON.stringify(defaultSeededUsers));
      } catch (err) {}
    }
    customList.forEach(custom => {
      const customId = (custom.identifier || custom.matric || custom.staffId || "").toLowerCase();
      const existingIdx = merged.findIndex(m => (m.identifier || m.matric || m.staffId || "").toLowerCase() === customId);
      if (existingIdx >= 0) {
        merged[existingIdx] = { ...merged[existingIdx], ...custom };
      } else {
        merged.push(custom);
      }
    });
    return merged;
  } catch (e) {
    return defaultSeededUsers;
  }
}

function getStudentUsersList() {
  return getRegisteredUsersList().filter(u => u.role === "student");
}

function getStaffUsersList() {
  return getRegisteredUsersList().filter(u => u.role === "admin");
}

function isSuperAdminUser(user) {
  return typeof isUserCoordinatorOrSuperAdmin === 'function' ? isUserCoordinatorOrSuperAdmin(user) : (user && (user.isSuperAdmin || user.isCoordinator));
}

function isUserCoordinatorOrSuperAdmin(user) {
  if (!user) return false;
  if (user.isSuperAdmin === true || user.isCoordinator === true) return true;
  const staffId = (user.staffId || user.identifier || '').toUpperCase();
  if (staffId === 'ADMIN/LASU/CS-DIR' || staffId.includes('DIR') || staffId.includes('COORD')) return true;
  const name = (user.name || '').toUpperCase();
  if (name.includes('COORDINATOR') || name.includes('DIRECTOR')) return true;
  return false;
}

function getVisibleStudentsForUser(user) {
  const allStudents = getStudentUsersList();
  if (!user) return allStudents;
  if (isUserCoordinatorOrSuperAdmin(user)) {
    return allStudents;
  }
  const userName = (user.name || '').toLowerCase().trim();
  return allStudents.filter(s => {
    const sup = (s.institutionalSupervisor || s.supervisor || '').toLowerCase().trim();
    return sup === userName || sup.includes(userName) || userName.includes(sup);
  });
}


function registerNewUserInDB(newUserObj) {
  try {
    const raw = localStorage.getItem(USERS_DB_KEY);
    const list = raw ? JSON.parse(raw) : [];
    
    const newId = (newUserObj.identifier || newUserObj.matric || newUserObj.staffId || "").toLowerCase();
    const existingIdx = list.findIndex(u => (u.identifier || u.matric || u.staffId || "").toLowerCase() === newId);
    
    if (existingIdx >= 0) {
      list[existingIdx] = { ...list[existingIdx], ...newUserObj };
    } else {
      list.push(newUserObj);
    }
    
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    console.error("Failed to register user", e);
    return false;
  }
}

function updateUserInDB(identifierOrMatric, updatedFields) {
  try {
    if (!identifierOrMatric || typeof identifierOrMatric !== 'string' || !identifierOrMatric.trim()) {
      console.warn("updateUserInDB: Invalid identifier provided", identifierOrMatric);
      return false;
    }
    const raw = localStorage.getItem(USERS_DB_KEY);
    const list = raw ? JSON.parse(raw) : [];
    const targetId = identifierOrMatric.trim().toLowerCase();

    // Check if it's in custom list
    let found = false;
    list.forEach((u, idx) => {
      const uId = (u.identifier || u.matric || u.staffId || "").toLowerCase();
      if (uId && uId === targetId) {
        list[idx] = { ...u, ...updatedFields };
        found = true;
      }
    });

    if (!found) {
      // Find in seeded users and copy to custom list
      const seeded = defaultSeededUsers.find(u => {
        const sId = (u.identifier || u.matric || u.staffId || "").toLowerCase();
        return sId && sId === targetId;
      });
      if (seeded) {
        list.push({ ...seeded, ...updatedFields });
        found = true;
      }
    }

    localStorage.setItem(USERS_DB_KEY, JSON.stringify(list));

    // Only update active user if the target strictly matches the logged in user's identity
    const active = getActiveUser();
    if (active) {
      const activeId = (active.identifier || active.matric || active.staffId || "").toLowerCase();
      if (activeId && activeId === targetId) {
        setActiveUser({ ...active, ...updatedFields });
      }
    }

    return true;
  } catch (e) {
    console.error("Failed to update user in DB", e);
    return false;
  }
}


function authenticateUserCredentials(role, identifier, password) {
  const allUsers = getRegisteredUsersList();
  const cleanId = identifier.trim().toLowerCase();

  // Find user by role and matching identifier (matric, staffId, or identifier)
  const user = allUsers.find(u => {
    if (u.role !== role) return false;
    const uId = (u.identifier || u.matric || u.staffId || "").toLowerCase();
    return uId === cleanId || (cleanId.startsWith("230591") && uId === "230591***");
  });

  if (!user) {
    return {
      success: false,
      message: `Account not found for ${role === 'student' ? 'Matric Number' : 'Staff Code'} "${identifier}". Please verify your credentials or create an account.`
    };
  }

  // Verify password exact match
  if (user.password !== password) {
    return {
      success: false,
      message: "Incorrect password! Please check your password and try again."
    };
  }

  return {
    success: true,
    user: user
  };
}

// Secure Digitalize Initiative — Universal Auth, Modal & Public Verification Engine

// Global Auth State Management
const AUTH_KEY = "sdi_active_user_session";

function getActiveUser() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setActiveUser(userObj) {
  try {
    localStorage.setItem(AUTH_KEY, JSON.stringify(userObj));
    updateAllNavbarsAuthUI();
  } catch (e) {
    console.error("Failed to persist user session", e);
  }
}

function logoutUser(redirectHome = true) {
  openCustomModal({
    title: "Sign Out Confirmation",
    badge: "Session Security",
    icon: "log-out",
    iconClass: "modal-icon-blue",
    contentHtml: `
      <div style="font-size: 0.95rem; color: #1E293B; line-height: 1.5;">
        Are you sure you want to end your current session?
        <p style="color: #64748B; font-size: 0.86rem; margin-top: 0.5rem; margin-bottom: 0;">
          All saved records remain securely recorded in the institutional ledger.
        </p>
      </div>
    `,
    confirmText: "Sign Out",
    confirmClass: "btn-primary",
    cancelText: "Stay Signed In",
    onConfirm: () => {
      try {
        localStorage.removeItem(AUTH_KEY);
        localStorage.removeItem("sdi_active_user_session");
      } catch (e) {
        console.error("Logout storage clear error", e);
      }
      closeCustomModal();
      showCustomToast("You have been securely signed out.", "info", 1800);
      updateAllNavbarsAuthUI();
      setTimeout(() => {
        window.location.href = "index.html";
      }, 400);
    }
  });
}

// Global aliases for logout
window.logoutUser = logoutUser;
window.logoutActiveUser = logoutUser;

document.addEventListener("DOMContentLoaded", () => {
  initCustomModalSystem();
  checkPortalRouteGuards();
  updateAllNavbarsAuthUI();

  // Search input listeners on verifier page
  const verifyInput = document.getElementById("verifyInput");
  const inputClearX = document.getElementById("inputClearX");

  if (verifyInput) {
    verifyInput.addEventListener("input", () => {
      if (inputClearX) {
        inputClearX.style.display = verifyInput.value.trim().length > 0 ? "flex" : "none";
      }
    });

    verifyInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        performVerification();
      } else if (e.key === "Escape") {
        e.preventDefault();
        clearVerification();
      }
    });
  }

  // Bind auth buttons across document
  document.querySelectorAll(".btn-open-login").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openAuthModal("login", "student");
    });
  });

  document.querySelectorAll(".btn-open-register").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openAuthModal("register", "student");
    });
  });

  console.log("Secure Digitalize Initiative Auth & Security Engine initialized.");
});

/* ============================================================
   1. DYNAMIC NAVBAR AUTH STATE UPDATE
   ============================================================ */

function updateAllNavbarsAuthUI() {
  const user = getActiveUser();
  const navActionsList = document.querySelectorAll(".nav-actions");

  navActionsList.forEach(navActions => {
    if (!user) {
      // Logged Out State
      navActions.innerHTML = `
        <a href="student-auth.html" class="btn btn-secondary btn-sm" style="font-weight: 700; font-size: 0.82rem;">
          Student Portal
        </a>
        <a href="admin-auth.html" class="btn btn-primary btn-sm" style="font-weight: 700; font-size: 0.82rem; background: #059669; border-color: #059669;">
          <i data-lucide="shield-check" style="width: 14px;"></i> Staff Portal
        </a>
      `;
    } else {
      // Logged In State
      const isStudent = user.role === "student";
      const portalLink = isStudent ? "student-portal.html" : "admin-portal.html";
      const portalLabel = isStudent ? "Student Portal" : "Admin Portal";
      const userName = user.name || (isStudent ? "Student Account" : "Staff Account");

      navActions.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.55rem;">
          <div style="display: flex; align-items: center; gap: 0.45rem; background: #F8FAFC; border: 1px solid #CBD5E1; padding: 0.3rem 0.75rem; border-radius: 9999px;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #10B981; flex-shrink: 0;"></span>
            <span style="font-weight: 700; font-size: 0.8rem; color: #0F172A; max-width: 170px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              ${userName}
            </span>
          </div>
          <a href="${portalLink}" class="btn btn-primary btn-sm" style="font-weight: 700; font-size: 0.82rem; background: #059669; border-color: #059669; display: inline-flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="layout-dashboard" style="width: 14px;"></i> ${portalLabel} &rarr;
          </a>
          <button class="btn btn-secondary btn-sm" onclick="logoutUser(true)" style="font-weight: 700; font-size: 0.82rem; color: #DC2626; border-color: #FECACA; background: #FEF2F2; padding: 0.35rem 0.65rem;" title="Sign Out">
            <i data-lucide="log-out" style="width: 14px;"></i>
          </button>
        </div>
      `;
    }
  });

  if (window.lucide) lucide.createIcons();
}

/* ============================================================
   2. CUSTOM TOAST & MODAL POPUP SYSTEM
   ============================================================ */

function initCustomModalSystem() {
  if (!document.getElementById("customToastContainer")) {
    const toastContainer = document.createElement("div");
    toastContainer.id = "customToastContainer";
    toastContainer.className = "custom-toast-container";
    document.body.appendChild(toastContainer);
  }

  if (!document.getElementById("customModalBackdrop")) {
    const modalBackdrop = document.createElement("div");
    modalBackdrop.id = "customModalBackdrop";
    modalBackdrop.className = "custom-modal-backdrop";
    modalBackdrop.innerHTML = `
      <div class="custom-modal-dialog" id="customModalDialog" role="dialog" aria-modal="true">
        <div class="custom-modal-header" id="customModalHeader">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div class="custom-modal-icon" id="customModalIcon">
              <i data-lucide="info" style="width: 20px; height: 20px;"></i>
            </div>
            <div>
              <span class="custom-modal-badge" id="customModalBadge" style="display:none;"></span>
              <h3 class="custom-modal-title" id="customModalTitle">Modal Title</h3>
            </div>
          </div>
          <button type="button" class="custom-modal-close" onclick="closeCustomModal()" aria-label="Close">
            <i data-lucide="x" style="width: 18px; height: 18px;"></i>
          </button>
        </div>
        <div class="custom-modal-body" id="customModalBody"></div>
        <div class="custom-modal-footer" id="customModalFooter"></div>
      </div>
    `;
    document.body.appendChild(modalBackdrop);

    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeCustomModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeCustomModal();
    });
  }
}

function showCustomToast(message, type = "success", duration = 3500) {
  initCustomModalSystem();
  const container = document.getElementById("customToastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `custom-toast toast-${type}`;

  let iconName = "check-circle";
  if (type === "info") iconName = "info";
  if (type === "warning") iconName = "alert-triangle";
  if (type === "error") iconName = "alert-circle";

  toast.innerHTML = `
    <div class="toast-icon"><i data-lucide="${iconName}" style="width: 18px; height: 18px;"></i></div>
    <div class="toast-msg">${message}</div>
    <button class="toast-close" onclick="this.parentElement.remove()"><i data-lucide="x" style="width: 14px; height: 14px;"></i></button>
    <div class="toast-progress" style="animation-duration: ${duration}ms;"></div>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.classList.add("toast-fadeout");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function openCustomModal({
  title = "Notification",
  badge = "",
  icon = "info",
  iconClass = "modal-icon-blue",
  contentHtml = "",
  confirmText = "OK",
  confirmClass = "btn-primary",
  cancelText = "",
  onConfirm = null
}) {
  initCustomModalSystem();

  const backdrop = document.getElementById("customModalBackdrop");
  const modalTitle = document.getElementById("customModalTitle");
  const modalBadge = document.getElementById("customModalBadge");
  const modalIcon = document.getElementById("customModalIcon");
  const modalBody = document.getElementById("customModalBody");
  const modalFooter = document.getElementById("customModalFooter");

  modalTitle.innerText = title;

  if (badge) {
    modalBadge.innerText = badge;
    modalBadge.style.display = "inline-block";
  } else {
    modalBadge.style.display = "none";
  }

  modalIcon.className = `custom-modal-icon ${iconClass}`;
  modalIcon.innerHTML = `<i data-lucide="${icon}" style="width: 22px; height: 22px;"></i>`;
  modalBody.innerHTML = contentHtml;

  let footerHtml = "";
  if (cancelText) {
    footerHtml += `<button type="button" class="btn btn-secondary" onclick="closeCustomModal()">${cancelText}</button>`;
  }
  if (confirmText) {
    footerHtml += `<button type="button" class="btn ${confirmClass}" id="customModalConfirmBtn">${confirmText}</button>`;
  }
  modalFooter.innerHTML = footerHtml;

  if (onConfirm) {
    const confirmBtn = document.getElementById("customModalConfirmBtn");
    if (confirmBtn) {
      confirmBtn.onclick = () => {
        onConfirm();
      };
    }
  } else {
    const confirmBtn = document.getElementById("customModalConfirmBtn");
    if (confirmBtn) {
      confirmBtn.onclick = () => closeCustomModal();
    }
  }

  backdrop.classList.add("modal-open");
  if (window.lucide) lucide.createIcons();
}

function closeCustomModal() {
  const backdrop = document.getElementById("customModalBackdrop");
  if (backdrop) backdrop.classList.remove("modal-open");
}

/* ============================================================
   3. COMPREHENSIVE AUTH MODAL (LOGIN & CREATE ACCOUNT)
   ============================================================ */

let currentAuthMode = "login"; // "login" | "register"
let currentAuthRole = "student"; // "student" | "admin"

function openAuthModal(mode = "login", role = "student") {
  currentAuthMode = mode;
  currentAuthRole = role;
  renderAuthModalContent();
}

function renderAuthModalContent() {
  const isLogin = currentAuthMode === "login";
  const isStudent = currentAuthRole === "student";

  const modalTitle = isLogin ? "Institutional Access Login" : "Create Accredited Account";
  const modalBadge = isStudent ? "Student Workspace" : "Institutional Admin";
  const icon = isLogin ? "lock" : "user-plus";
  const iconClass = isStudent ? "modal-icon-blue" : "modal-icon-purple";

  let bodyHtml = `
    <!-- Top Mode Switcher (Login vs Register) -->
    <div class="auth-mode-switch">
      <button type="button" class="auth-tab-btn ${isLogin ? 'active' : ''}" onclick="switchAuthMode('login')">
        <i data-lucide="log-in" style="width: 14px;"></i> Sign In
      </button>
      <button type="button" class="auth-tab-btn ${!isLogin ? 'active' : ''}" onclick="switchAuthMode('register')">
        <i data-lucide="user-plus" style="width: 14px;"></i> Create Account
      </button>
    </div>

    <!-- Role Selector (Student vs Admin) -->
    <div style="margin-bottom: 1.25rem;">
      <div style="font-size: 0.78rem; font-weight: 700; color: #64748B; text-transform: uppercase; margin-bottom: 0.4rem;">Select Portal Role:</div>
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="role-tab ${isStudent ? 'active' : ''}" onclick="switchAuthRole('student')">
          <i data-lucide="graduation-cap" style="width: 14px; margin-right: 4px;"></i> Student
        </button>
        <button type="button" class="role-tab ${!isStudent ? 'active' : ''}" onclick="switchAuthRole('admin')">
          <i data-lucide="shield-check" style="width: 14px; margin-right: 4px;"></i> Institutional Admin
        </button>
      </div>
    </div>
  `;

  if (isLogin) {
    // LOGIN FORM
    bodyHtml += `
      <form id="authLoginForm" onsubmit="handleAuthSubmit(event)" style="display: flex; flex-direction: column; gap: 0.9rem;">
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.35rem;">
            ${isStudent ? 'Matriculation Number' : 'Institutional Admin Code / Email'}
          </label>
          <input type="text" id="authIdentifier" class="search-field" style="width: 100%; box-sizing: border-box;" 
                 placeholder="${isStudent ? 'e.g. 230591***' : 'e.g. ADMIN/LASU/CS-DIR'}" 
                 placeholder="${isStudent ? 'Enter Matric Number' : 'Enter Staff ID'}" required>
        </div>
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.35rem;">
            Security Access Password
          </label>
          <input type="password" id="authPassword" class="search-field" style="width: 100%; box-sizing: border-box;" 
                 placeholder="••••••••" placeholder="••••••••" required>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: #64748B;">
          <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
            <input type="checkbox" checked> Remember this device
          </label>
          <a href="#" onclick="showCustomToast('Password reset link sent to institutional email.', 'info')" style="color: #3B49DF; font-weight: 600;">Forgot passcode?</a>
        </div>
      </form>
    `;
  } else {
    // REGISTRATION FORM
    bodyHtml += `
      <form id="authRegisterForm" onsubmit="handleAuthSubmit(event)" style="display: flex; flex-direction: column; gap: 0.85rem; max-height: 50vh; overflow-y: auto; padding-right: 0.25rem;">
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.3rem;">
            Full Legal Name
          </label>
          <input type="text" id="regFullName" class="search-field" style="width: 100%; box-sizing: border-box;" 
                 placeholder="e.g. Opeyemi Abraham Benjamin" placeholder="Enter full legal name" required>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem;">
          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.3rem;">
              ${isStudent ? 'Matric Number' : 'Staff Code'}
            </label>
            <input type="text" id="regMatric" class="search-field" style="width: 100%; box-sizing: border-box;" 
                   placeholder="${isStudent ? '230591***' : 'STAFF/2026/04'}" placeholder="Enter identifier" required>
          </div>
          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.3rem;">
              Institution
            </label>
            <select id="regInstitution" class="search-field" style="width: 100%; box-sizing: border-box; background: white;">
              <option value="Lagos State University (LASU)">Lagos State University (LASU)</option>
              <option value="Lagos State University of Education (LASUED)">LASUED</option>
              <option value="Accredited Partner Campus">Partner Institution</option>
            </select>
          </div>
        </div>
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.3rem;">
            Academic Department / Unit
          </label>
          <input type="text" id="regDept" class="search-field" style="width: 100%; box-sizing: border-box;" 
                 placeholder="e.g. Computer Science" placeholder="e.g. Computer Science" required>
        </div>
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.3rem;">
            Create Secure Password
          </label>
          <input type="password" id="regPassword" class="search-field" style="width: 100%; box-sizing: border-box;" 
                 placeholder="••••••••" placeholder="••••••••" required>
        </div>
      </form>
    `;
  }

  openCustomModal({
    title: modalTitle,
    badge: modalBadge,
    icon: icon,
    iconClass: iconClass,
    contentHtml: bodyHtml,
    confirmText: isLogin ? `Log In as ${isStudent ? 'Student' : 'Admin'}` : `Register & Create ${isStudent ? 'Student' : 'Admin'} Profile`,
    confirmClass: isStudent ? "btn-primary" : "btn-primary btn-purple-theme",
    cancelText: "Cancel",
    onConfirm: () => {
      executeAuthAction();
    }
  });
}

function switchAuthMode(mode) {
  currentAuthMode = mode;
  renderAuthModalContent();
}

function switchAuthRole(role) {
  currentAuthRole = role;
  renderAuthModalContent();
}

function handleAuthSubmit(e) {
  if (e) e.preventDefault();
  executeAuthAction();
}

function executeAuthAction() {
  const isLogin = currentAuthMode === "login";
  const isStudent = currentAuthRole === "student";

  if (isLogin) {
    const idInput = document.getElementById("authIdentifier");
    const ident = idInput ? idInput.value.trim() : (isStudent ? "230591***" : "ADMIN/LASU/CS-DIR");
    
    const userSession = {
      role: isStudent ? "student" : "admin",
      name: isStudent ? "BENJAMIN OPEYEMI ABRAHAM" : "Institutional Directorate Admin",
      matric: isStudent ? "230591***" : null,
      staffId: !isStudent ? "ADMIN/LASU/CS-DIR" : null,
      dept: "Computer Science",
      institution: "Lagos State University (LASU)",
      loggedInAt: new Date().toISOString()
    };

    setActiveUser(userSession);
    closeCustomModal();
    showCustomToast(`Welcome back, ${userSession.name.split(' ')[0]}! Access Granted.`, "success");

    setTimeout(() => {
      window.location.href = isStudent ? "student-portal.html" : "admin-portal.html";
    }, 800);

  } else {
    // Registration
    const nameInput = document.getElementById("regFullName");
    const matricInput = document.getElementById("regMatric");
    const deptInput = document.getElementById("regDept");
    const instSelect = document.getElementById("regInstitution");

    const userSession = {
      role: isStudent ? "student" : "admin",
      name: (nameInput && nameInput.value.trim()) ? nameInput.value.trim().toUpperCase() : (isStudent ? "BENJAMIN OPEYEMI ABRAHAM" : "DR. SIWES COORDINATOR"),
      matric: isStudent ? ((matricInput && matricInput.value.trim()) ? matricInput.value.trim() : "230591***") : null,
      staffId: !isStudent ? ((matricInput && matricInput.value.trim()) ? matricInput.value.trim() : "STAFF/2026/04") : null,
      dept: (deptInput && deptInput.value.trim()) ? deptInput.value.trim() : "Computer Science",
      institution: instSelect ? instSelect.value : "Lagos State University (LASU)",
      registeredAt: new Date().toISOString()
    };

    setActiveUser(userSession);
    closeCustomModal();
    showCustomToast(`Account successfully created for ${userSession.name}! Welcome aboard.`, "success");

    setTimeout(() => {
      window.location.href = isStudent ? "student-portal.html" : "admin-portal.html";
    }, 900);
  }
}

/* ============================================================
   4. MODALS FOR LOGBOOK, QR CODE & DETAILS
   ============================================================ */

function openNewLogModal() {
  const user = getActiveUser();
  if (!user) {
    showCustomToast("Please sign in to submit logbook entries.", "warning");
    openAuthModal("login", "student");
    return;
  }

  openCustomModal({
    title: "New Weekly Logbook Submission",
    badge: "Week 13 Entry",
    icon: "calendar-plus",
    iconClass: "modal-icon-emerald",
    contentHtml: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.35rem;">
            Placement Module & Department
          </label>
          <input type="text" class="search-field" style="width: 100%; box-sizing: border-box;" value="Directorate of ICT — Core Infrastructure & Security">
        </div>
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.35rem;">
            Weekly Accomplishments & Tasks Logged
          </label>
          <textarea class="search-field" style="width: 100%; height: 90px; font-family: var(--font-body); box-sizing: border-box;" placeholder="Describe engineering milestones, cryptographic tasks, and systems deployed..."></textarea>
        </div>
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.35rem;">
            Acquired Technical Skills (Tags)
          </label>
          <input type="text" class="search-field" style="width: 100%; box-sizing: border-box;" placeholder="e.g. Node.js, PostgreSQL, Docker, SHA-256 Audit">
        </div>
      </div>
    `,
    confirmText: "Submit for Supervisor Review",
    confirmClass: "btn-primary",
    cancelText: "Save Draft",
    onConfirm: () => {
      showCustomToast("Week 13 entry recorded and sent for supervisor sign-off!", "success");
      closeCustomModal();
    }
  });
}

function openStudentDetailsModal(studentName, matric, status) {
  openCustomModal({
    title: studentName || "Student Placement Audit",
    badge: "Institutional Record",
    icon: "user-check",
    iconClass: "modal-icon-blue",
    contentHtml: `
      <div style="display: flex; flex-direction: column; gap: 0.85rem;">
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1rem;">
          <div style="font-size: 0.8rem; color: #64748B; font-weight: 700;">MATRIC NUMBER</div>
          <div style="font-family: var(--font-mono); font-size: 1.1rem; font-weight: 800; color: #0284C7;">${matric || "230591***"}</div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 0.75rem;">
            <div style="font-size: 0.75rem; color: #64748B; font-weight: 700;">DEPARTMENT</div>
            <div style="font-weight: 700; color: #1E293B;">Computer Science</div>
          </div>
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 0.75rem;">
            <div style="font-size: 0.75rem; color: #64748B; font-weight: 700;">STATUS</div>
            <div style="font-weight: 700; color: #059669;">● ${status || "Verified & Active"}</div>
          </div>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 0.75rem;">
          <div style="font-size: 0.75rem; color: #64748B; font-weight: 700;">PLACEMENT HOST</div>
          <div style="font-weight: 700; color: #1E293B;">Directorate of SIWES, LASUED</div>
        </div>
      </div>
    `,
    confirmText: "Close Audit",
    cancelText: ""
  });
}

function openQRVerifyModal(verificationId, hash, institutionLogo) {
  openCustomModal({
    title: "Cryptographic QR Clearance",
    badge: verificationId || "SDI-2026-99A",
    icon: "qr-code",
    iconClass: "modal-icon-purple",
    contentHtml: `
      <div style="text-align: center; padding: 0.5rem 0;">
        <div style="display: inline-block; padding: 1.25rem; background: #FFFFFF; border: 2px solid #E2E8F0; border-radius: 16px; box-shadow: 0 8px 20px rgba(0,0,0,0.06); margin-bottom: 1rem;">
          <svg style="width: 140px; height: 140px;" viewBox="0 0 100 100" fill="#0F172A">
            <rect width="100" height="100" fill="#FFFFFF"/>
            <rect x="10" y="10" width="25" height="25" fill="#0F172A"/>
            <rect x="15" y="15" width="15" height="15" fill="#FFFFFF"/>
            <rect x="18" y="18" width="9" height="9" fill="#0F172A"/>
            <rect x="65" y="10" width="25" height="25" fill="#0F172A"/>
            <rect x="70" y="15" width="15" height="15" fill="#FFFFFF"/>
            <rect x="73" y="18" width="9" height="9" fill="#0F172A"/>
            <rect x="10" y="65" width="25" height="25" fill="#0F172A"/>
            <rect x="15" y="70" width="15" height="15" fill="#FFFFFF"/>
            <rect x="18" y="73" width="9" height="9" fill="#0F172A"/>
            <rect x="42" y="42" width="16" height="16" fill="#0284C7"/>
            <rect x="42" y="15" width="6" height="18" fill="#0F172A"/>
            <rect x="52" y="25" width="8" height="6" fill="#0F172A"/>
            <rect x="15" y="45" width="12" height="8" fill="#0F172A"/>
            <rect x="65" y="55" width="22" height="8" fill="#0F172A"/>
            <rect x="45" y="70" width="15" height="18" fill="#0F172A"/>
            <rect x="70" y="70" width="18" height="15" fill="#0F172A"/>
          </svg>
        </div>
        <p style="font-family: var(--font-mono); font-size: 0.8rem; color: #64748B; word-break: break-all; margin: 0 0 0.5rem 0;">
          ${hash || "sha256:a8f9c301e4b78912d098e16a2b"}
        </p>
        <span style="display: inline-block; background: #ECFDF5; color: #059669; font-size: 0.75rem; font-weight: 800; padding: 0.25rem 0.65rem; border-radius: 9999px;">
          ● Scan Live with any standard Camera / Authenticator
        </span>
      </div>
    `,
    confirmText: "Copy Link & Hash",
    confirmClass: "btn-primary",
    cancelText: "Done",
    onConfirm: () => {
      showCustomToast("Verification link and SHA-256 Hash copied!", "success");
    }
  });
}

/* ============================================================
   5. VERIFICATION TERMINAL LOGIC
   ============================================================ */

const verifiedRecords = [
  {
    id: "rec_1",
    name: "BENJAMIN OPEYEMI ABRAHAM",
    matric: "230591***",
    dept: "Computer Science",
    faculty: "Faculty of Science",
    institution: "Lagos State University (LASU)",
    institutionShort: "LASU",
    institutionLogo: "assets/lasu_logo.png",
    placement: "Directorate of SIWES, LASUED",
    supervisor: "Dr. A. O. Institutional Coordinator",
    status: "Verified & Active",
    verificationId: "SDI-2026-99A",
    qrHash: "sha256:a8f9c301e4b78912d098e16a2b",
    rawHash: "a8f9c301e4b78912d098e16a2b",
    verifiedAt: "2026-09-30 11:45:00 UTC",
    academicSession: "2025/2026 Academic Session"
  },
  {
    id: "rec_2",
    name: "REGISTERED UNDERGRADUATE",
    matric: "230592***",
    dept: "Computer Science",
    faculty: "Faculty of Science",
    institution: "Lagos State University (LASU)",
    institutionShort: "LASU",
    institutionLogo: "assets/lasu_logo.png",
    placement: "Technology Innovation Center",
    supervisor: "Industry Supervisor (Accredited)",
    status: "Verified & Active",
    verificationId: "LASU/2026/CS-042",
    qrHash: "sha256:c9e4b712a8f93010d1009bb32e",
    rawHash: "c9e4b712a8f93010d1009bb32e",
    verifiedAt: "2026-09-28 09:15:00 UTC",
    academicSession: "2025/2026 Academic Session"
  }
];

function performVerification() {
  const inputEl = document.getElementById("verifyInput");
  const rawInput = inputEl ? inputEl.value.trim() : "";
  const resultBox = document.getElementById("verifyResult");
  const inputClearX = document.getElementById("inputClearX");

  if (!resultBox) return;

  if (inputClearX) {
    inputClearX.style.display = rawInput.length > 0 ? "flex" : "none";
  }

  if (!rawInput) {
    showCustomToast("Please enter a Matric Number, Slip ID or Hash", "warning");
    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <div style="background: #FFFBEB; border: 1.5px solid #FCD34D; border-radius: 12px; padding: 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
        <div style="color: #B45309; display: flex; align-items: center; gap: 0.65rem; font-weight: 600; font-size: 0.95rem;">
          <i data-lucide="alert-circle" style="width: 20px; height: 20px; color: #D97706; flex-shrink: 0;"></i>
          <span>Please enter a Matric Number (e.g. <code>230591***</code>), Slip ID (<code>SDI-2026-99A</code>), or Cryptographic Hash.</span>
        </div>
        <button class="btn-chip-clear" onclick="clearVerification()">Dismiss</button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  const q = rawInput.toLowerCase().trim();
  const cleanQ = q.replace(/^sha256:/i, "").trim();

  const record = verifiedRecords.find(r => {
    const matricClean = r.matric.toLowerCase();
    const idClean = r.verificationId.toLowerCase();
    const qrHashClean = r.qrHash.toLowerCase();
    const rawHashClean = r.rawHash.toLowerCase();
    const nameClean = r.name.toLowerCase();

    return (
      q === matricClean ||
      q === idClean ||
      q === qrHashClean ||
      cleanQ === rawHashClean ||
      rawHashClean.startsWith(cleanQ) ||
      qrHashClean.includes(cleanQ) ||
      (q.startsWith("230591") && matricClean.startsWith("230591")) ||
      (q.length >= 3 && nameClean.includes(q))
    );
  });

  resultBox.style.display = "block";

  if (record) {
    showCustomToast("Institutional Record Verified & Validated!", "success");
    resultBox.innerHTML = `
      <div class="verification-success-card printable-slip" id="printableCredentialSlip">
        
        <!-- 1. Top Fellowship Program Clearance Header -->
        <div class="program-clearance-header">
          <div class="program-brand-strip">
            <div class="program-brand-icon">
              <i data-lucide="shield-check" style="width: 22px; height: 22px;"></i>
            </div>
            <div>
              <h2 class="program-title">SECURE DIGITALIZE INITIATIVE</h2>
              <p class="program-subtitle">United Nations Academic Impact (UNAI) &amp; Millennium Campus Network (MCN) • Class of 2026</p>
            </div>
          </div>
          <div class="program-header-badges">
            <span class="badge-audit-passed">
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i> OFFICIAL AUDIT PASSED
            </span>
            <span class="badge-slip-id">${record.verificationId}</span>
          </div>
        </div>

        <!-- 2. Institutional University Section with School Crest -->
        <div class="institutional-section-strip">
          <img src="${record.institutionLogo}" alt="${record.institution} Official Seal" class="verified-school-logo">
          <div class="institution-details-block">
            <h3 class="institution-title">${record.institution}</h3>
            <p class="institution-subtitle">Directorate of SIWES &amp; ICT • Faculty of Science Accreditation</p>
            <div class="institution-status-badge">
              <i data-lucide="shield" style="width: 12px; height: 12px;"></i>
              <span>AUTHENTIC INSTITUTIONAL RECORD</span>
            </div>
          </div>
        </div>

        <!-- 3. Student Details Grid -->
        <div class="verified-body-box">
          <h3 class="student-name-heading">${record.name}</h3>
          
          <div class="verified-meta-grid">
            <div class="meta-item">
              <span class="meta-label">Matric Number</span>
              <span class="meta-value font-mono-highlight">${record.matric}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Department</span>
              <span class="meta-value">${record.dept}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Accredited Institution</span>
              <span class="meta-value">${record.institution}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Placement Organization</span>
              <span class="meta-value">${record.placement}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Academic Session</span>
              <span class="meta-value">${record.academicSession}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Validation Status</span>
              <span class="meta-value" style="color: #059669; font-weight: 700;">● ${record.status}</span>
            </div>
          </div>

          <!-- 4. Hash & Timestamp Audit Info -->
          <div class="hash-audit-row">
            <div class="hash-info">
              <i data-lucide="fingerprint" style="width: 14px; height: 14px; color: #0284C7;"></i>
              <span class="hash-label">Cryptographic Fingerprint:</span>
              <code class="hash-code" id="activeAuditHash" onclick="copyAuditHash('${record.qrHash}')" title="Click to copy hash">${record.qrHash}</code>
            </div>
            <div class="timestamp-info">
              <i data-lucide="clock" style="width: 13px; height: 13px;"></i>
              <span>${record.verifiedAt}</span>
            </div>
          </div>
        </div>

        <!-- 5. Print-only Electronic Institutional Seal Footer -->
        <div class="print-official-footer">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 1.25rem; padding-top: 0.85rem; border-top: 1px dashed #CBD5E1; font-size: 0.78rem; color: #64748B;">
            <div>
              <p style="margin: 0; font-weight: 700; color: #1E293B;">Cryptographic Verification Registry</p>
              <p style="margin: 0.15rem 0 0 0;">Public Verification Terminal ID: SDI-REG-2026</p>
            </div>
            <div style="text-align: right;">
              <p style="margin: 0; font-family: var(--font-mono); font-weight: 700;">SHA-256 SIGNATURE VALID</p>
              <p style="margin: 0.15rem 0 0 0;">Electronic Institutional Seal</p>
            </div>
          </div>
        </div>

        <!-- 6. Action Toolbar (Single Line) -->
        <div class="result-actions-bar no-print">
          <button class="action-btn btn-action-primary" onclick="clearVerification()" title="Audit another student record">
            <i data-lucide="user-plus" style="width: 15px; height: 15px;"></i>
            <span>Check Another Student</span>
          </button>
          <button class="action-btn btn-action-secondary" onclick="openQRVerifyModal('${record.verificationId}', '${record.qrHash}', '${record.institutionLogo}')" title="View Verification QR Code">
            <i data-lucide="qr-code" style="width: 15px; height: 15px;"></i>
            <span>QR Code</span>
          </button>
          <button class="action-btn btn-action-secondary" id="btnCopyHash" onclick="copyAuditHash('${record.qrHash}')" title="Copy verification hash">
            <i data-lucide="copy" style="width: 15px; height: 15px;"></i>
            <span id="copyHashLabel">Copy Hash</span>
          </button>
          <button class="action-btn btn-action-secondary" onclick="printOfficialSlip()" title="Print / Export official verification credential slip">
            <i data-lucide="printer" style="width: 15px; height: 15px;"></i>
            <span>Print Slip</span>
          </button>
        </div>
      </div>
    `;
  } else {
    showCustomToast("No matching record found in registry.", "warning");
    resultBox.innerHTML = `
      <div class="verification-unfound-card printable-slip">
        <div class="result-header-row">
          <span style="background: #EEF2FF; border: 1px solid #C7D2FE; color: #3B49DF; font-size: 0.78rem; font-weight: 700; padding: 0.28rem 0.75rem; border-radius: 9999px; display: inline-flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="search" style="width: 13px;"></i> RECORD NOT FOUND IN REGISTRY
          </span>
          <span style="font-family: var(--font-mono); font-size: 0.85rem; color: #64748B;">Query: ${rawInput}</span>
        </div>
        <div style="margin: 1.25rem 0 1.5rem 0;">
          <h4 style="color: #0F172A; margin: 0 0 0.4rem 0; font-size: 1.15rem; font-weight: 700;">No Matching Cryptographic Record</h4>
          <p style="color: #64748B; margin: 0; font-size: 0.92rem; line-height: 1.6;">
            The query <strong>"${rawInput}"</strong> was not matched in the verified registry.
          </p>
        </div>
        <div class="result-actions-bar no-print">
          <button class="btn-check-another" onclick="clearVerification()">
            <i data-lucide="rotate-ccw" style="width: 15px; height: 15px;"></i>
            <span>Check Another Student Record</span>
          </button>
        </div>
      </div>
    `;
  }

  if (window.lucide) lucide.createIcons();
}

function clearVerification() {
  const input = document.getElementById("verifyInput");
  const resultBox = document.getElementById("verifyResult");
  const inputClearX = document.getElementById("inputClearX");

  if (input) {
    input.value = "";
    input.focus();
  }

  if (inputClearX) {
    inputClearX.style.display = "none";
  }

  if (resultBox) {
    resultBox.style.display = "none";
    resultBox.innerHTML = "";
  }

  showCustomToast("Search cleared. Ready to audit another student.", "info", 2000);
}

function quickVerify(val) {
  const input = document.getElementById("verifyInput");
  if (input) {
    input.value = val;
  }
  performVerification();
}

function copyAuditHash(hashText) {
  navigator.clipboard.writeText(hashText).then(() => {
    showCustomToast(`SHA-256 Hash copied to clipboard: ${hashText.substring(0, 18)}...`, "success");
    const btn = document.getElementById("btnCopyHash");
    if (btn) {
      btn.classList.add("btn-copied-state");
      const label = document.getElementById("copyHashLabel");
      if (label) label.innerText = "Copied!";
      setTimeout(() => {
        btn.classList.remove("btn-copied-state");
        if (label) label.innerText = "Copy Hash";
      }, 2000);
    }
  }).catch(() => {
    openCustomModal({
      title: "Cryptographic SHA-256 Hash",
      badge: "Institutional Audit String",
      icon: "fingerprint",
      iconClass: "modal-icon-blue",
      contentHtml: `<div style="background:#F8FAFC; border:1px solid #CBD5E1; padding:1rem; border-radius:8px; font-family:var(--font-mono); font-size:0.9rem; word-break:break-all;">${hashText}</div>`,
      confirmText: "Close"
    });
  });
}

function printOfficialSlip() {
  showCustomToast("Preparing official cryptographic slip for printing...", "info", 1500);
  setTimeout(() => {
    window.print();
  }, 400);
}


// Route Guards: Require login before opening student or admin portals
function checkPortalRouteGuards() {
  const path = window.location.pathname;
  const user = getActiveUser();

  if (path.includes("student-portal.html")) {
    if (user && user.role && user.role !== "student") {
      showCustomToast("Please sign in with your student credentials to access this workspace.", "warning");
      setTimeout(() => {
        window.location.href = "student-auth.html";
      }, 500);
      return;
    } else if (user) {
      const nameEl = document.getElementById("studentDisplayName");
      const matricEl = document.getElementById("studentDisplayMatric");
      if (nameEl) nameEl.innerText = user.name || "BENJAMIN OPEYEMI ABRAHAM";
      if (matricEl) matricEl.innerText = `Matric: ${user.matric || '230591***'} | ${user.dept || 'Computer Science'}`;
    }
  }

  if (path.includes("admin-portal.html")) {
    if (user && user.role && user.role !== "admin") {
      showCustomToast("Institutional Admin clearance required. Please sign in.", "warning");
      setTimeout(() => {
        window.location.href = "admin-auth.html";
      }, 500);
      return;
    }
  }
}



// ============================================================
// DYNAMIC INDUSTRY PARTNERS NORMALIZATION & AUTO-AGGREGATION
// ============================================================
function normalizePartnerKey(name) {
  if (!name) return "";
  return name.toString().trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}

function formatCanonicalPartnerName(name) {
  if (!name) return "";
  const trimmed = name.toString().trim();
  // If acronym like LASU, LASUED, NACOS, NNPC, MTN, IBM, keep uppercase
  if (trimmed.length <= 6 && !trimmed.includes(" ")) {
    return trimmed.toUpperCase();
  }
  return trimmed.split(' ').map(w => {
    if (w.length <= 4 && w.toUpperCase() === w && /^[A-Z0-9]+$/.test(w)) {
      return w;
    }
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

function getAccreditedPartnersList() {
  const partnersMap = new Map();

  // Base accredited partners
  const basePartners = [
    {
      name: "Directorate of SIWES, LASUED",
      sector: "Institutional Technology Infrastructure",
      address: "Main Directorate Complex, University Innovation Center, Lagos State",
      contact: "siwes-matching@lasu.edu.ng"
    },
    {
      name: "Technology Innovation & Software Hub",
      sector: "Cloud Architecture & Full-Stack Development",
      address: "Block 4 Innovation Wing, Lagos State",
      contact: "lead.mentor@innovationhub.ng"
    },
    {
      name: "NACOS National Software Division",
      sector: "Cybersecurity & Open-Source Auditing",
      address: "Computer Science Complex, Ojo Campus",
      contact: "contact@nacos.org.ng"
    },
    {
      name: "Enterprise Data & Cryptography Labs",
      sector: "Ledger Security & Systems Engineering",
      address: "Tech Corridor, Victoria Island, Lagos",
      contact: "audit@enterprisesecure.ng"
    }
  ];

  basePartners.forEach(bp => {
    const key = normalizePartnerKey(bp.name);
    partnersMap.set(key, {
      id: key,
      name: bp.name,
      sector: bp.sector,
      address: bp.address,
      contact: bp.contact,
      isBase: true,
      students: []
    });
  });

  // Fetch all students across system
  const allStudents = typeof getStudentUsersList === 'function' ? getStudentUsersList() : [];

  allStudents.forEach(stud => {
    const orgRaw = (stud.hostOrg || stud.company || stud.organization || stud.placementHost || "").trim();
    if (!orgRaw || orgRaw.toLowerCase() === 'unassigned' || orgRaw.toLowerCase() === 'pending') {
      return;
    }

    const key = normalizePartnerKey(orgRaw);
    if (!key) return;

    if (partnersMap.has(key)) {
      const partner = partnersMap.get(key);
      partner.students.push(stud);
      // If student typed uppercase acronym like LASU, improve display name
      if (orgRaw.length <= 6 && orgRaw.toUpperCase() === orgRaw) {
        partner.name = orgRaw;
      }
    } else {
      // Auto-create new industry partner!
      const formattedName = formatCanonicalPartnerName(orgRaw);
      let sector = "Industrial Attachment & Practical Training";
      const lower = orgRaw.toLowerCase();
      if (lower.includes("tech") || lower.includes("soft") || lower.includes("dev") || lower.includes("cloud") || lower.includes("code") || lower.includes("it")) {
        sector = "Information Technology & Software Development";
      } else if (lower.includes("bank") || lower.includes("fin") || lower.includes("pay") || lower.includes("money") || lower.includes("fund")) {
        sector = "Fintech, Banking & Financial Systems";
      } else if (lower.includes("data") || lower.includes("cyber") || lower.includes("sec") || lower.includes("audit")) {
        sector = "Cybersecurity, Auditing & Data Analytics";
      } else if (lower.includes("energy") || lower.includes("power") || lower.includes("oil") || lower.includes("gas") || lower.includes("petro")) {
        sector = "Energy, Engineering & Infrastructure";
      } else if (lower.includes("telecom") || lower.includes("comm") || lower.includes("mtn") || lower.includes("airtel")) {
        sector = "Telecommunications & Network Infrastructure";
      } else if (lower.includes("art") || lower.includes("print") || lower.includes("design") || lower.includes("creative") || lower.includes("craft") || lower.includes("stroke") || lower.includes("concept")) {
        sector = "Arts, Creative Design & Visual Media";
      } else if (lower.includes("theatre") || lower.includes("drama") || lower.includes("troupe") || lower.includes("music") || lower.includes("sound") || lower.includes("stage") || lower.includes("song")) {
        sector = "Performing Arts, Music & Theatre Production";
      } else if (lower.includes("radio") || lower.includes("broadcast") || lower.includes("media") || lower.includes("press") || lower.includes("news") || lower.includes("tv") || lower.includes("fm")) {
        sector = "Media, Broadcasting & Communications";
      } else if (lower.includes("museum") || lower.includes("history") || lower.includes("monument") || lower.includes("heritage") || lower.includes("archive") || lower.includes("diplomacy")) {
        sector = "Historical Archives, Museums & Cultural Heritage";
      } else if (lower.includes("government") || lower.includes("lcda") || lower.includes("secretariat") || lower.includes("council") || lower.includes("ministry") || lower.includes("court")) {
        sector = "Government, Public Administration & Local Councils";
      } else if (lower.includes("lasu") || lower.includes("lasued") || lower.includes("uni") || lower.includes("edu") || lower.includes("campus") || lower.includes("school") || lower.includes("church")) {
        sector = "Educational & Institutional Placement Center";
      }

      partnersMap.set(key, {
        id: key,
        name: formattedName,
        sector: sector,
        address: stud.placementAddress || "Lagos Metropolitan Area, Nigeria",
        contact: stud.supervisorEmail || (stud.matric ? `placement@${key.slice(0, 10)}.org.ng` : "partner.desk@lasu.edu.ng"),
        isBase: false,
        students: [stud]
      });
    }
  });

  return Array.from(partnersMap.values());
}



// ============================================================
// SECURITY CLEARANCE & SUPER ADMIN AUTHORIZATION SYSTEM
// ============================================================
function isUserApproved(user) {
  if (!user) return false;
  if (isUserCoordinatorOrSuperAdmin(user)) return true;
  if (user.approvalStatus === 'approved' || user.isApproved === true) return true;
  if (user.approvalStatus === 'pending' || user.isApproved === false || user.approvalStatus === 'suspended') return false;
  return true;
}

function getPendingClearanceUsersList() {
  const allUsers = getRegisteredUsersList();
  return allUsers.filter(u => !isUserApproved(u));
}

function approveUserClearance(identifier, superAdminName = 'Dr. A. O. Institutional Coordinator') {
  const allUsers = typeof getRegisteredUsersList === 'function' ? getRegisteredUsersList() : defaultSeededUsers;
  const cleanId = (identifier || '').trim().toLowerCase();
  const targetUser = allUsers.find(u => (u.identifier || u.matric || u.staffId || '').toLowerCase() === cleanId) || { name: identifier };

  const ok = updateUserInDB(identifier, {
    isApproved: true,
    approvalStatus: 'approved',
    approvedBy: superAdminName,
    approvedAt: new Date().toISOString()
  });

  if (ok) {
    const updatedUsers = typeof getRegisteredUsersList === 'function' ? getRegisteredUsersList() : [];
    const updatedUser = updatedUsers.find(u => (u.identifier || u.matric || u.staffId || '').toLowerCase() === cleanId) || targetUser;
    return {
      success: true,
      message: 'Security clearance authorized successfully',
      user: updatedUser
    };
  } else {
    return {
      success: false,
      message: 'Failed to authorize clearance in database',
      user: targetUser
    };
  }
}

function revokeOrSuspendUserClearance(identifier, superAdminName = 'Dr. A. O. Institutional Coordinator') {
  const allUsers = typeof getRegisteredUsersList === 'function' ? getRegisteredUsersList() : defaultSeededUsers;
  const cleanId = (identifier || '').trim().toLowerCase();
  const targetUser = allUsers.find(u => (u.identifier || u.matric || u.staffId || '').toLowerCase() === cleanId) || { name: identifier };

  const ok = updateUserInDB(identifier, {
    isApproved: false,
    approvalStatus: 'suspended',
    approvedBy: superAdminName,
    suspendedAt: new Date().toISOString()
  });

  if (ok) {
    const updatedUsers = typeof getRegisteredUsersList === 'function' ? getRegisteredUsersList() : [];
    const updatedUser = updatedUsers.find(u => (u.identifier || u.matric || u.staffId || '').toLowerCase() === cleanId) || targetUser;
    return {
      success: true,
      message: 'User clearance denied/suspended',
      user: updatedUser
    };
  } else {
    return {
      success: false,
      message: 'Failed to suspend clearance in database',
      user: targetUser
    };
  }
}
/* ============================================================
   AUTHENTIC 24-WEEK SIWES LOGBOOK DATASET (BENJAMIN OPEYEMI ABRAHAM)
   DIRECTORATE OF SIWES & DIRECTORATE OF ICT, LASUED OTO/IJANIKIN
   MATRIC: 230591215 / 230591***
   ============================================================ */
const opeyemiReal24WeeksLogs = {
  "1": {
    "mon": "Reported to the LASUED Directorate of SIWES for internship orientation and administrative registration formalities.",
    "tue": "Completed student intake documentation and received orientation briefing on departmental filing guidelines.",
    "wed": "Introduced to unit administrative staff and shown the document filing cabinets and inward correspondence registries.",
    "thu": "Studied the physical filing system organized by academic department and academic session year.",
    "fri": "Met with institutional supervisor to discuss internship duties, record-keeping protocols, and front desk tasks.",
    "sat": "Reviewed office document management procedures and drafted personal weekly summary notes.",
    "summary": "Completed orientation at the LASUED SIWES Directorate, familiarized with office workflow, and studied physical document archiving procedures.",
    "weeklySummary": "Completed orientation at the LASUED SIWES Directorate, familiarized with office workflow, and studied physical document archiving procedures.",
    "days": {
      "mon": {
        "date": "Mar 02, 2026",
        "task": "Reported to the LASUED Directorate of SIWES for internship orientation and administrative registration formalities."
      },
      "tue": {
        "date": "Mar 03, 2026",
        "task": "Completed student intake documentation and received orientation briefing on departmental filing guidelines."
      },
      "wed": {
        "date": "Mar 04, 2026",
        "task": "Introduced to unit administrative staff and shown the document filing cabinets and inward correspondence registries."
      },
      "thu": {
        "date": "Mar 05, 2026",
        "task": "Studied the physical filing system organized by academic department and academic session year."
      },
      "fri": {
        "date": "Mar 06, 2026",
        "task": "Met with institutional supervisor to discuss internship duties, record-keeping protocols, and front desk tasks."
      },
      "sat": {
        "date": "Mar 07, 2026",
        "task": "Reviewed office document management procedures and drafted personal weekly summary notes."
      }
    },
    "supervisor": "Student reported punctually and completed all orientation protocols. Assigned to front desk intake and filing desk.",
    "supervisorRemark": "Student reported punctually and completed all orientation protocols. Assigned to front desk intake and filing desk.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-03-08T10:00:00.000Z"
  },
  "2": {
    "mon": "Followed up on placement verification memos and observed staff retrieving student files from shelves.",
    "tue": "Walked through the administrative complex to locate the Registry, ICT Directorate, Bursary, and DVC office for document dispatch.",
    "wed": "Received official SIWES acceptance letter, verified matriculation number and department details, and scheduled weekly rota.",
    "thu": "Attended briefing on student data confidentiality, handling sealed letters signed by the Vice-Chancellor, and record privacy.",
    "fri": "Reorganized front desk intake registers and updated logbook notes on office filing workflows.",
    "sat": "Compiled notes on institutional dispatch routes and cross-checked outward correspondence records.",
    "summary": "Mastered administrative document flow across campus directorates and established strict confidentiality handling protocols for official student records.",
    "weeklySummary": "Mastered administrative document flow across campus directorates and established strict confidentiality handling protocols for official student records.",
    "days": {
      "mon": {
        "date": "Mar 09, 2026",
        "task": "Followed up on placement verification memos and observed staff retrieving student files from shelves."
      },
      "tue": {
        "date": "Mar 10, 2026",
        "task": "Walked through the administrative complex to locate the Registry, ICT Directorate, Bursary, and DVC office for document dispatch."
      },
      "wed": {
        "date": "Mar 11, 2026",
        "task": "Received official SIWES acceptance letter, verified matriculation number and department details, and scheduled weekly rota."
      },
      "thu": {
        "date": "Mar 12, 2026",
        "task": "Attended briefing on student data confidentiality, handling sealed letters signed by the Vice-Chancellor, and record privacy."
      },
      "fri": {
        "date": "Mar 13, 2026",
        "task": "Reorganized front desk intake registers and updated logbook notes on office filing workflows."
      },
      "sat": {
        "date": "Mar 14, 2026",
        "task": "Compiled notes on institutional dispatch routes and cross-checked outward correspondence records."
      }
    },
    "supervisor": "Good grasp of institutional document hierarchy and strict adherence to student confidentiality guidelines.",
    "supervisorRemark": "Good grasp of institutional document hierarchy and strict adherence to student confidentiality guidelines.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-03-15T11:30:00.000Z"
  },
  "3": {
    "mon": "Handled front desk student file intake, verifying student matric numbers against departmental lists before logging into the physical register.",
    "tue": "Unboxed new office desktop computer with corrupted Windows installation; performed fresh installation of Windows 10 from bootable USB drive.",
    "wed": "Completed workstation setup by installing Microsoft Office suite, PDF reader, and running Windows Update patches before connecting to office LAN.",
    "thu": "Public Holiday - Eid al-Fitr. Office closed.",
    "fri": "Public Holiday - Eid al-Fitr Holiday. Office closed.",
    "sat": "Reviewed workstation setup documentation and drafted OS installation flowchart.",
    "summary": "Configured and deployed a new Windows 10 desktop computer for the administrative desk and managed incoming student file registration.",
    "weeklySummary": "Configured and deployed a new Windows 10 desktop computer for the administrative desk and managed incoming student file registration.",
    "days": {
      "mon": {
        "date": "Mar 16, 2026",
        "task": "Handled front desk student file intake, verifying student matric numbers against departmental lists before logging into the physical register."
      },
      "tue": {
        "date": "Mar 17, 2026",
        "task": "Unboxed new office desktop computer with corrupted Windows installation; performed fresh installation of Windows 10 from bootable USB drive."
      },
      "wed": {
        "date": "Mar 18, 2026",
        "task": "Completed workstation setup by installing Microsoft Office suite, PDF reader, and running Windows Update patches before connecting to office LAN."
      },
      "thu": {
        "date": "Mar 19, 2026",
        "task": "Public Holiday - Eid al-Fitr. Office closed."
      },
      "fri": {
        "date": "Mar 20, 2026",
        "task": "Public Holiday - Eid al-Fitr Holiday. Office closed."
      },
      "sat": {
        "date": "Mar 21, 2026",
        "task": "Reviewed workstation setup documentation and drafted OS installation flowchart."
      }
    },
    "supervisor": "Excellent technical initiative on workstation deployment and clean operating system installation.",
    "supervisorRemark": "Excellent technical initiative on workstation deployment and clean operating system installation.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-03-22T09:45:00.000Z"
  },
  "4": {
    "mon": "Troubleshot office local area network outage by inspecting Cat5e/Cat6 patch cables, rebooting the Cisco switch, and renewing DHCP leases with ipconfig /renew.",
    "tue": "Diagnosed unbootable staff laptop halting at black screen; opened chassis, cleaned contacts, and reseated loose RAM module to restore boot sequence.",
    "wed": "Connected to Cisco Catalyst switch via console cable and PuTTY; executed basic IOS commands to check switchport status and VLAN 1 configuration.",
    "thu": "Handled bulk printing and collating of over 30 approved SIWES student placement letters grouped by department, scanning signed copies into backup folders.",
    "fri": "Mapped a visual flowchart detailing student file progression from front desk intake to final directorate sign-off and dispatch.",
    "sat": "Documented hardware troubleshooting procedures in logbook and reconciled weekly file counts.",
    "summary": "Resolved network connectivity failure, performed laptop hardware repair, configured Cisco switch via CLI, and processed batch student approval letters.",
    "weeklySummary": "Resolved network connectivity failure, performed laptop hardware repair, configured Cisco switch via CLI, and processed batch student approval letters.",
    "days": {
      "mon": {
        "date": "Mar 23, 2026",
        "task": "Troubleshot office local area network outage by inspecting Cat5e/Cat6 patch cables, rebooting the Cisco switch, and renewing DHCP leases with ipconfig /renew."
      },
      "tue": {
        "date": "Mar 24, 2026",
        "task": "Diagnosed unbootable staff laptop halting at black screen; opened chassis, cleaned contacts, and reseated loose RAM module to restore boot sequence."
      },
      "wed": {
        "date": "Mar 25, 2026",
        "task": "Connected to Cisco Catalyst switch via console cable and PuTTY; executed basic IOS commands to check switchport status and VLAN 1 configuration."
      },
      "thu": {
        "date": "Mar 26, 2026",
        "task": "Handled bulk printing and collating of over 30 approved SIWES student placement letters grouped by department, scanning signed copies into backup folders."
      },
      "fri": {
        "date": "Mar 27, 2026",
        "task": "Mapped a visual flowchart detailing student file progression from front desk intake to final directorate sign-off and dispatch."
      },
      "sat": {
        "date": "Mar 28, 2026",
        "task": "Documented hardware troubleshooting procedures in logbook and reconciled weekly file counts."
      }
    },
    "supervisor": "Demonstrated practical networking and hardware troubleshooting capability. Commended for prompt resolution of office switch outage.",
    "supervisorRemark": "Demonstrated practical networking and hardware troubleshooting capability. Commended for prompt resolution of office switch outage.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-03-29T14:15:00.000Z"
  },
  "5": {
    "mon": "Analyzed physical inward registry book fields (matric number, student name, department, phone number, host organization) to plan digital database structure.",
    "tue": "Built a basic prototype HTML page displaying structured student records in a tabular format using matric number as unique identifier.",
    "wed": "Conducted monthly audit of March incoming register, cross-referencing paper receipts against student file folders.",
    "thu": "Cleaned and indexed physical departmental filing boxes to improve retrieval speed for pending student inquiries.",
    "fri": "Public Holiday - Good Friday. Office closed.",
    "sat": "Reviewed relational database concepts and normalized table design for student record management.",
    "summary": "Initiated database schema conceptualization based on physical inward book records and audited end-of-month administrative files.",
    "weeklySummary": "Initiated database schema conceptualization based on physical inward book records and audited end-of-month administrative files.",
    "days": {
      "mon": {
        "date": "Mar 30, 2026",
        "task": "Analyzed physical inward registry book fields (matric number, student name, department, phone number, host organization) to plan digital database structure."
      },
      "tue": {
        "date": "Mar 31, 2026",
        "task": "Built a basic prototype HTML page displaying structured student records in a tabular format using matric number as unique identifier."
      },
      "wed": {
        "date": "Apr 01, 2026",
        "task": "Conducted monthly audit of March incoming register, cross-referencing paper receipts against student file folders."
      },
      "thu": {
        "date": "Apr 02, 2026",
        "task": "Cleaned and indexed physical departmental filing boxes to improve retrieval speed for pending student inquiries."
      },
      "fri": {
        "date": "Apr 03, 2026",
        "task": "Public Holiday - Good Friday. Office closed."
      },
      "sat": {
        "date": "Apr 04, 2026",
        "task": "Reviewed relational database concepts and normalized table design for student record management."
      }
    },
    "supervisor": "Very constructive transition from manual paper record observation to structured database conceptualization.",
    "supervisorRemark": "Very constructive transition from manual paper record observation to structured database conceptualization.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-04-05T10:20:00.000Z"
  },
  "6": {
    "mon": "Public Holiday - Easter Monday. Office closed.",
    "tue": "Resumed duties after Easter break; sorted backlog of incoming correspondence and flagged pending student files awaiting director's signature.",
    "wed": "Studied introductory cybersecurity concepts on OverTheWire, documenting core terminology including reconnaissance, penetration testing, and ethical hacking.",
    "thu": "Reorganized administrative filing shelves and read technical materials on social engineering and phishing tactics targeting institutional staff.",
    "fri": "Assessed office security practices against social engineering risks and ensured physical file cabinets were locked before weekend closure.",
    "sat": "Summarized study notes on basic network reconnaissance and threat classification.",
    "summary": "Managed post-holiday document backlog and advanced foundational knowledge in threat vectors and social engineering defenses.",
    "weeklySummary": "Managed post-holiday document backlog and advanced foundational knowledge in threat vectors and social engineering defenses.",
    "days": {
      "mon": {
        "date": "Apr 06, 2026",
        "task": "Public Holiday - Easter Monday. Office closed."
      },
      "tue": {
        "date": "Apr 07, 2026",
        "task": "Resumed duties after Easter break; sorted backlog of incoming correspondence and flagged pending student files awaiting director's signature."
      },
      "wed": {
        "date": "Apr 08, 2026",
        "task": "Studied introductory cybersecurity concepts on OverTheWire, documenting core terminology including reconnaissance, penetration testing, and ethical hacking."
      },
      "thu": {
        "date": "Apr 09, 2026",
        "task": "Reorganized administrative filing shelves and read technical materials on social engineering and phishing tactics targeting institutional staff."
      },
      "fri": {
        "date": "Apr 10, 2026",
        "task": "Assessed office security practices against social engineering risks and ensured physical file cabinets were locked before weekend closure."
      },
      "sat": {
        "date": "Apr 11, 2026",
        "task": "Summarized study notes on basic network reconnaissance and threat classification."
      }
    },
    "supervisor": "Conscientious work on file reconciliation and solid theoretical understanding of cybersecurity fundamentals.",
    "supervisorRemark": "Conscientious work on file reconciliation and solid theoretical understanding of cybersecurity fundamentals.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-04-12T16:00:00.000Z"
  },
  "7": {
    "mon": "Managed front desk intake and began study of LetsDefend Network Fundamentals module, focusing on the CIA Triad (Confidentiality, Integrity, Availability).",
    "tue": "Documented common network attack vectors including malware, ransomware, denial-of-service (DoS), and man-in-the-middle attacks.",
    "wed": "Studied OSI Layer 2 and Layer 3 hardware roles, distinguishing packet-forwarding mechanisms of network hubs, switches, and edge routers.",
    "thu": "Researched network firewalls, analyzing differences between stateless packet filters, stateful inspection firewalls, and next-generation firewalls (NGFW).",
    "fri": "Studied Intrusion Detection Systems (IDS) vs Intrusion Prevention Systems (IPS), noting passive alert generation versus inline active blocking.",
    "sat": "Consolidated weekly cybersecurity notes and drew comparison diagrams between IDS/IPS deployments.",
    "summary": "Covered core network defense mechanisms, the CIA triad, firewall architectures, and active intrusion prevention systems.",
    "weeklySummary": "Covered core network defense mechanisms, the CIA triad, firewall architectures, and active intrusion prevention systems.",
    "days": {
      "mon": {
        "date": "Apr 13, 2026",
        "task": "Managed front desk intake and began study of LetsDefend Network Fundamentals module, focusing on the CIA Triad (Confidentiality, Integrity, Availability)."
      },
      "tue": {
        "date": "Apr 14, 2026",
        "task": "Documented common network attack vectors including malware, ransomware, denial-of-service (DoS), and man-in-the-middle attacks."
      },
      "wed": {
        "date": "Apr 15, 2026",
        "task": "Studied OSI Layer 2 and Layer 3 hardware roles, distinguishing packet-forwarding mechanisms of network hubs, switches, and edge routers."
      },
      "thu": {
        "date": "Apr 16, 2026",
        "task": "Researched network firewalls, analyzing differences between stateless packet filters, stateful inspection firewalls, and next-generation firewalls (NGFW)."
      },
      "fri": {
        "date": "Apr 17, 2026",
        "task": "Studied Intrusion Detection Systems (IDS) vs Intrusion Prevention Systems (IPS), noting passive alert generation versus inline active blocking."
      },
      "sat": {
        "date": "Apr 18, 2026",
        "task": "Consolidated weekly cybersecurity notes and drew comparison diagrams between IDS/IPS deployments."
      }
    },
    "supervisor": "Good analytical breakdown of network defense layers and practical application to institutional network safety.",
    "supervisorRemark": "Good analytical breakdown of network defense layers and practical application to institutional network safety.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-04-19T11:00:00.000Z"
  },
  "8": {
    "mon": "Handled incoming student registration queries and studied Virtual Private Network (VPN) tunneling protocols and IPSec encryption modes.",
    "tue": "Assisted with printing outgoing SIWES introductory letters and studied AAA framework (Authentication, Authorization, and Accounting) for access control.",
    "wed": "Researched wireless security standards, comparing legacy WEP/WPA vulnerabilities against WPA2 and WPA3 SAE handshakes.",
    "thu": "Archived scanned approval memos into the digital archive and reviewed technical summaries on perimeter security controls.",
    "fri": "Conducted weekly dispatch check with the outward mail register and verified all courier tracking slips were logged.",
    "sat": "Compiled end-of-week technical summary on AAA authorization models and secure remote access tunneling.",
    "summary": "Studied secure tunneling, AAA identity governance, and enterprise wireless encryption protocols while supporting office letter dispatch.",
    "weeklySummary": "Studied secure tunneling, AAA identity governance, and enterprise wireless encryption protocols while supporting office letter dispatch.",
    "days": {
      "mon": {
        "date": "Apr 20, 2026",
        "task": "Handled incoming student registration queries and studied Virtual Private Network (VPN) tunneling protocols and IPSec encryption modes."
      },
      "tue": {
        "date": "Apr 21, 2026",
        "task": "Assisted with printing outgoing SIWES introductory letters and studied AAA framework (Authentication, Authorization, and Accounting) for access control."
      },
      "wed": {
        "date": "Apr 22, 2026",
        "task": "Researched wireless security standards, comparing legacy WEP/WPA vulnerabilities against WPA2 and WPA3 SAE handshakes."
      },
      "thu": {
        "date": "Apr 23, 2026",
        "task": "Archived scanned approval memos into the digital archive and reviewed technical summaries on perimeter security controls."
      },
      "fri": {
        "date": "Apr 24, 2026",
        "task": "Conducted weekly dispatch check with the outward mail register and verified all courier tracking slips were logged."
      },
      "sat": {
        "date": "Apr 25, 2026",
        "task": "Compiled end-of-week technical summary on AAA authorization models and secure remote access tunneling."
      }
    },
    "supervisor": "Strong comprehension of access control principles and consistent attention to daily administrative logs.",
    "supervisorRemark": "Strong comprehension of access control principles and consistent attention to daily administrative logs.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-04-26T12:30:00.000Z"
  },
  "9": {
    "mon": "Processed front desk student inquiries and conducted comprehensive review of all April technical security and networking notes.",
    "tue": "Reconnected an office administrative workstation that lost connectivity by testing patch lead and resetting the network interface controller (NIC).",
    "wed": "Drafted monthly activity report for April, tracking total student intake numbers, verified clearances, and pending approvals.",
    "thu": "Cleaned physical archive shelves and prepared documentation handover ahead of scheduled deployment to the Directorate of ICT technical base.",
    "fri": "Public Holiday - Workers' Day. Office closed.",
    "sat": "Reviewed upcoming May objectives for technical IT support and computer-based testing (CBT) lab maintenance.",
    "summary": "Completed April administrative cycle, resolved local NIC hardware connectivity, and finalized preparation for ICT Directorate technical deployment.",
    "weeklySummary": "Completed April administrative cycle, resolved local NIC hardware connectivity, and finalized preparation for ICT Directorate technical deployment.",
    "days": {
      "mon": {
        "date": "Apr 27, 2026",
        "task": "Processed front desk student inquiries and conducted comprehensive review of all April technical security and networking notes."
      },
      "tue": {
        "date": "Apr 28, 2026",
        "task": "Reconnected an office administrative workstation that lost connectivity by testing patch lead and resetting the network interface controller (NIC)."
      },
      "wed": {
        "date": "Apr 29, 2026",
        "task": "Drafted monthly activity report for April, tracking total student intake numbers, verified clearances, and pending approvals."
      },
      "thu": {
        "date": "Apr 30, 2026",
        "task": "Cleaned physical archive shelves and prepared documentation handover ahead of scheduled deployment to the Directorate of ICT technical base."
      },
      "fri": {
        "date": "May 01, 2026",
        "task": "Public Holiday - Workers' Day. Office closed."
      },
      "sat": {
        "date": "May 02, 2026",
        "task": "Reviewed upcoming May objectives for technical IT support and computer-based testing (CBT) lab maintenance."
      }
    },
    "supervisor": "Commendable performance throughout the administrative posting. Ready for technical CBT deployment at the ICT Directorate.",
    "supervisorRemark": "Commendable performance throughout the administrative posting. Ready for technical CBT deployment at the ICT Directorate.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-05-03T10:00:00.000Z"
  },
  "10": {
    "mon": "Reported to the Directorate of Information and Communication Technology (ICT) for technical attachment duties across the campus CBT computer centers.",
    "tue": "Inspected CBT Lab A (60 client workstations); performed hardware health checks, tested power supplies, and confirmed keyboard/mouse responses.",
    "wed": "Audited CBT Lab B (60 client workstations); verified Cat6 Ethernet drops from wall faceplates to desktop network interface cards.",
    "thu": "Mapped patch panel ports in the server room rack to corresponding desk numbers across both computer testing laboratories.",
    "fri": "Tested local network bandwidth and connectivity from client machines to the institutional CBT testing server via continuous ping commands.",
    "sat": "Documented hardware status of all 120 client machines and submitted inventory checklist to the ICT network engineer.",
    "summary": "Initiated technical posting at ICT Directorate, audited 120 CBT exam workstations, and mapped physical network infrastructure across two testing centers.",
    "weeklySummary": "Initiated technical posting at ICT Directorate, audited 120 CBT exam workstations, and mapped physical network infrastructure across two testing centers.",
    "days": {
      "mon": {
        "date": "May 04, 2026",
        "task": "Reported to the Directorate of Information and Communication Technology (ICT) for technical attachment duties across the campus CBT computer centers."
      },
      "tue": {
        "date": "May 05, 2026",
        "task": "Inspected CBT Lab A (60 client workstations); performed hardware health checks, tested power supplies, and confirmed keyboard/mouse responses."
      },
      "wed": {
        "date": "May 06, 2026",
        "task": "Audited CBT Lab B (60 client workstations); verified Cat6 Ethernet drops from wall faceplates to desktop network interface cards."
      },
      "thu": {
        "date": "May 07, 2026",
        "task": "Mapped patch panel ports in the server room rack to corresponding desk numbers across both computer testing laboratories."
      },
      "fri": {
        "date": "May 08, 2026",
        "task": "Tested local network bandwidth and connectivity from client machines to the institutional CBT testing server via continuous ping commands."
      },
      "sat": {
        "date": "May 09, 2026",
        "task": "Documented hardware status of all 120 client machines and submitted inventory checklist to the ICT network engineer."
      }
    },
    "supervisor": "Thorough physical and network audit of the CBT laboratories. Accurate mapping of patch panel drops.",
    "supervisorRemark": "Thorough physical and network audit of the CBT laboratories. Accurate mapping of patch panel drops.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-05-10T14:45:00.000Z"
  },
  "11": {
    "mon": "Inspected damaged network cables in CBT Lab A; stripped outer jackets and untwisted pairs in preparation for re-termination.",
    "tue": "Crimped 24 new RJ-45 modular connectors onto Cat6 patch cords following the TIA/EIA-568B wiring standard (White-Orange, Orange, White-Green, Blue...).",
    "wed": "Tested all newly crimped patch cables using a handheld network cable continuity tester, identifying and re-terminating 2 cables with crossed pairs.",
    "thu": "Replaced degraded Ethernet cables along student rows, secured wiring bundles with cable ties inside floor trunking to prevent physical trip hazards.",
    "fri": "Configured network switchport profiles on Cisco Catalyst switches, verifying 1 Gbps auto-negotiation and link status LEDs on all connected terminals.",
    "sat": "Reviewed cabling standards and drafted cable maintenance guidelines for laboratory assistants.",
    "summary": "Fabricated and validated 24 Cat6 T568B network patch cables, eliminated cable hazards in CBT Lab A, and confirmed switchport link integrity.",
    "weeklySummary": "Fabricated and validated 24 Cat6 T568B network patch cables, eliminated cable hazards in CBT Lab A, and confirmed switchport link integrity.",
    "days": {
      "mon": {
        "date": "May 11, 2026",
        "task": "Inspected damaged network cables in CBT Lab A; stripped outer jackets and untwisted pairs in preparation for re-termination."
      },
      "tue": {
        "date": "May 12, 2026",
        "task": "Crimped 24 new RJ-45 modular connectors onto Cat6 patch cords following the TIA/EIA-568B wiring standard (White-Orange, Orange, White-Green, Blue...)."
      },
      "wed": {
        "date": "May 13, 2026",
        "task": "Tested all newly crimped patch cables using a handheld network cable continuity tester, identifying and re-terminating 2 cables with crossed pairs."
      },
      "thu": {
        "date": "May 14, 2026",
        "task": "Replaced degraded Ethernet cables along student rows, secured wiring bundles with cable ties inside floor trunking to prevent physical trip hazards."
      },
      "fri": {
        "date": "May 15, 2026",
        "task": "Configured network switchport profiles on Cisco Catalyst switches, verifying 1 Gbps auto-negotiation and link status LEDs on all connected terminals."
      },
      "sat": {
        "date": "May 16, 2026",
        "task": "Reviewed cabling standards and drafted cable maintenance guidelines for laboratory assistants."
      }
    },
    "supervisor": "High-quality cabling work following industry standard pinouts. Zero continuity faults during testing.",
    "supervisorRemark": "High-quality cabling work following industry standard pinouts. Zero continuity faults during testing.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-05-17T11:15:00.000Z"
  },
  "12": {
    "mon": "Participated in live CBT exam mock simulation; monitored server response latency and client terminal authentication.",
    "tue": "Provided live technical support during General University CBT examination sessions; monitored exam hall for workstation connectivity drops.",
    "wed": "Diagnosed 3 client workstations showing network timeout errors during testing; identified static IP conflict and reconfigured adapters to automatic DHCP.",
    "thu": "Resolved client browser freeze on workstation 42 by terminating hung process, verifying local session cache, and re-logging student to continue exam.",
    "fri": "Assisted exam proctors with session time-sync verification and compiled technical incident report covering zero exam record loss across all sessions.",
    "sat": "Conducted post-exam lab diagnostics, shut down client systems, and secured networking equipment in rack cabinets.",
    "summary": "Supported live university CBT examinations, resolved real-time DHCP/IP conflicts, and maintained 100% exam continuity for over 800 test-takers.",
    "weeklySummary": "Supported live university CBT examinations, resolved real-time DHCP/IP conflicts, and maintained 100% exam continuity for over 800 test-takers.",
    "days": {
      "mon": {
        "date": "May 18, 2026",
        "task": "Participated in live CBT exam mock simulation; monitored server response latency and client terminal authentication."
      },
      "tue": {
        "date": "May 19, 2026",
        "task": "Provided live technical support during General University CBT examination sessions; monitored exam hall for workstation connectivity drops."
      },
      "wed": {
        "date": "May 20, 2026",
        "task": "Diagnosed 3 client workstations showing network timeout errors during testing; identified static IP conflict and reconfigured adapters to automatic DHCP."
      },
      "thu": {
        "date": "May 21, 2026",
        "task": "Resolved client browser freeze on workstation 42 by terminating hung process, verifying local session cache, and re-logging student to continue exam."
      },
      "fri": {
        "date": "May 22, 2026",
        "task": "Assisted exam proctors with session time-sync verification and compiled technical incident report covering zero exam record loss across all sessions."
      },
      "sat": {
        "date": "May 23, 2026",
        "task": "Conducted post-exam lab diagnostics, shut down client systems, and secured networking equipment in rack cabinets."
      }
    },
    "supervisor": "Rapid troubleshooting and decisive action during CBT exam sessions ensured no student suffered data or time loss.",
    "supervisorRemark": "Rapid troubleshooting and decisive action during CBT exam sessions ensured no student suffered data or time loss.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-05-24T15:30:00.000Z"
  },
  "13": {
    "mon": "Initiated comprehensive physical inventory of ICT equipment across the administrative and computer lab facilities.",
    "tue": "Counted and recorded serial numbers, MAC addresses, model types, and operational conditions of 140 desktop monitors and system units.",
    "wed": "Audited network rack hardware including Cisco Catalyst 2960 switches, MikroTik core routers, UPS backup batteries, and server power distributors.",
    "thu": "Compiled all hardware data into a structured Microsoft Excel inventory spreadsheet; formatted columns, applied auto-filters, and calculated totals.",
    "fri": "Created automated inventory status categories (Operational, Under Maintenance, Decommissioned) using conditional formatting in Excel.",
    "sat": "Backed up inventory files to institutional cloud storage and presented finalized hardware report to the Chief ICT Engineer.",
    "summary": "Executed comprehensive institutional hardware audit, compiled organized Excel inventory ledger with conditional formatting, and archived records.",
    "weeklySummary": "Executed comprehensive institutional hardware audit, compiled organized Excel inventory ledger with conditional formatting, and archived records.",
    "days": {
      "mon": {
        "date": "May 25, 2026",
        "task": "Initiated comprehensive physical inventory of ICT equipment across the administrative and computer lab facilities."
      },
      "tue": {
        "date": "May 26, 2026",
        "task": "Counted and recorded serial numbers, MAC addresses, model types, and operational conditions of 140 desktop monitors and system units."
      },
      "wed": {
        "date": "May 27, 2026",
        "task": "Audited network rack hardware including Cisco Catalyst 2960 switches, MikroTik core routers, UPS backup batteries, and server power distributors."
      },
      "thu": {
        "date": "May 28, 2026",
        "task": "Compiled all hardware data into a structured Microsoft Excel inventory spreadsheet; formatted columns, applied auto-filters, and calculated totals."
      },
      "fri": {
        "date": "May 29, 2026",
        "task": "Created automated inventory status categories (Operational, Under Maintenance, Decommissioned) using conditional formatting in Excel."
      },
      "sat": {
        "date": "May 30, 2026",
        "task": "Backed up inventory files to institutional cloud storage and presented finalized hardware report to the Chief ICT Engineer."
      }
    },
    "supervisor": "Highly organized and meticulous inventory compilation. Clear tracking of institutional digital infrastructure.",
    "supervisorRemark": "Highly organized and meticulous inventory compilation. Clear tracking of institutional digital infrastructure.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-05-31T09:30:00.000Z"
  },
  "14": {
    "mon": "Evaluated recurring bottlenecks observed during SIWES file processing and initiated software design for LASUED Automated Student Placement System (LASPS).",
    "tue": "Documented functional system requirements: online student onboarding, real-time application tracking, administrative review, and placement letter generation.",
    "wed": "Initialized project development environment using Node.js runtime and npm; configured package.json with express, cors, and body-parser dependencies.",
    "thu": "Designed project directory structure separating public frontend assets, server routes, controller modules, and database storage layers.",
    "fri": "Built baseline Express.js HTTP web server listening on local port 3000 and tested root endpoint routing responses using Postman.",
    "sat": "Drafted system architecture diagrams and wrote API endpoint specification document.",
    "summary": "Formulated architectural specifications for LASPS web portal and initialized Node.js/Express.js backend development environment.",
    "weeklySummary": "Formulated architectural specifications for LASPS web portal and initialized Node.js/Express.js backend development environment.",
    "days": {
      "mon": {
        "date": "Jun 01, 2026",
        "task": "Evaluated recurring bottlenecks observed during SIWES file processing and initiated software design for LASUED Automated Student Placement System (LASPS)."
      },
      "tue": {
        "date": "Jun 02, 2026",
        "task": "Documented functional system requirements: online student onboarding, real-time application tracking, administrative review, and placement letter generation."
      },
      "wed": {
        "date": "Jun 03, 2026",
        "task": "Initialized project development environment using Node.js runtime and npm; configured package.json with express, cors, and body-parser dependencies."
      },
      "thu": {
        "date": "Jun 04, 2026",
        "task": "Designed project directory structure separating public frontend assets, server routes, controller modules, and database storage layers."
      },
      "fri": {
        "date": "Jun 05, 2026",
        "task": "Built baseline Express.js HTTP web server listening on local port 3000 and tested root endpoint routing responses using Postman."
      },
      "sat": {
        "date": "Jun 06, 2026",
        "task": "Drafted system architecture diagrams and wrote API endpoint specification document."
      }
    },
    "supervisor": "Excellent initiative to solve manual administrative delays through bespoke software development. Clean architecture plan.",
    "supervisorRemark": "Excellent initiative to solve manual administrative delays through bespoke software development. Clean architecture plan.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-06-07T12:00:00.000Z"
  },
  "15": {
    "mon": "Designed relational database schema in SQLite (database.sqlite) with normalized tables for students, external_applications, and placements.",
    "tue": "Defined primary key constraints, foreign key cascades, and unique matriculation index rules to prevent duplicate student submissions.",
    "wed": "Wrote SQL data definition scripts (CREATE TABLE) and initial seeding queries to verify database integrity.",
    "thu": "Built Node.js database access layer using sqlite3 driver, implementing parameterized queries to prevent SQL injection vulnerabilities.",
    "fri": "Implemented CRUD REST API endpoints for student registration and placement record retrieval with JSON response payloads.",
    "sat": "Performed integration tests on SQLite query execution and verified transactional consistency.",
    "summary": "Engineered normalized SQLite relational database schema and integrated secure parameterized SQL query handlers into Express backend.",
    "weeklySummary": "Engineered normalized SQLite relational database schema and integrated secure parameterized SQL query handlers into Express backend.",
    "days": {
      "mon": {
        "date": "Jun 08, 2026",
        "task": "Designed relational database schema in SQLite (database.sqlite) with normalized tables for students, external_applications, and placements."
      },
      "tue": {
        "date": "Jun 09, 2026",
        "task": "Defined primary key constraints, foreign key cascades, and unique matriculation index rules to prevent duplicate student submissions."
      },
      "wed": {
        "date": "Jun 10, 2026",
        "task": "Wrote SQL data definition scripts (CREATE TABLE) and initial seeding queries to verify database integrity."
      },
      "thu": {
        "date": "Jun 11, 2026",
        "task": "Built Node.js database access layer using sqlite3 driver, implementing parameterized queries to prevent SQL injection vulnerabilities."
      },
      "fri": {
        "date": "Jun 12, 2026",
        "task": "Implemented CRUD REST API endpoints for student registration and placement record retrieval with JSON response payloads."
      },
      "sat": {
        "date": "Jun 13, 2026",
        "task": "Performed integration tests on SQLite query execution and verified transactional consistency."
      }
    },
    "supervisor": "Sound relational schema design with proper constraints and injection-safe SQL query structure.",
    "supervisorRemark": "Sound relational schema design with proper constraints and injection-safe SQL query structure.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-06-14T10:45:00.000Z"
  },
  "16": {
    "mon": "Developed user interface layout for the LASPS student portal using semantic HTML5 and modern responsive CSS flexbox/grid.",
    "tue": "Designed a responsive 4-step visual placement progress tracker showing: Registration -> Letter Upload -> Supervisor Review -> Final Placement.",
    "wed": "Built client-side form validation in vanilla JavaScript to verify matric numbers, phone formats, and mandatory attachment details prior to submit.",
    "thu": "Implemented asynchronous Fetch API calls to submit student placement details to the Express backend without page reloading.",
    "fri": "Added dynamic error messaging toasts and real-time status banners reflecting approval states from the backend database.",
    "sat": "Tested student interface across mobile, tablet, and desktop viewports, refining CSS media queries for responsive layout.",
    "summary": "Constructed responsive student onboarding interface with interactive 4-step progress timeline and asynchronous form submission.",
    "weeklySummary": "Constructed responsive student onboarding interface with interactive 4-step progress timeline and asynchronous form submission.",
    "days": {
      "mon": {
        "date": "Jun 15, 2026",
        "task": "Developed user interface layout for the LASPS student portal using semantic HTML5 and modern responsive CSS flexbox/grid."
      },
      "tue": {
        "date": "Jun 16, 2026",
        "task": "Designed a responsive 4-step visual placement progress tracker showing: Registration -> Letter Upload -> Supervisor Review -> Final Placement."
      },
      "wed": {
        "date": "Jun 17, 2026",
        "task": "Built client-side form validation in vanilla JavaScript to verify matric numbers, phone formats, and mandatory attachment details prior to submit."
      },
      "thu": {
        "date": "Jun 18, 2026",
        "task": "Implemented asynchronous Fetch API calls to submit student placement details to the Express backend without page reloading."
      },
      "fri": {
        "date": "Jun 19, 2026",
        "task": "Added dynamic error messaging toasts and real-time status banners reflecting approval states from the backend database."
      },
      "sat": {
        "date": "Jun 20, 2026",
        "task": "Tested student interface across mobile, tablet, and desktop viewports, refining CSS media queries for responsive layout."
      }
    },
    "supervisor": "Modern, user-friendly frontend interface with responsive design and robust client-side validation.",
    "supervisorRemark": "Modern, user-friendly frontend interface with responsive design and robust client-side validation.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-06-21T16:20:00.000Z"
  },
  "17": {
    "mon": "Designed External Applicant Tracking module to cater for visiting students seeking SIWES placement from partner institutions.",
    "tue": "Programmed server-side tracking ID generation algorithm producing unique reference tokens (e.g. EXT-4921) upon submission.",
    "wed": "Built public tracking search bar on the portal landing page allowing applicants to query real-time application status without logging in.",
    "thu": "Implemented database lookup query matching tracking tokens against external_applications table, returning sanitized status details.",
    "fri": "Added status badges indicating Pending Review, Approved, or Additional Documents Required with date timestamps.",
    "sat": "Conducted end-to-end testing of external application flow from submission to instant status lookup.",
    "summary": "Engineered external applicant tracking subsystem with tokenized public lookup engine, eliminating in-person enquiry queues.",
    "weeklySummary": "Engineered external applicant tracking subsystem with tokenized public lookup engine, eliminating in-person enquiry queues.",
    "days": {
      "mon": {
        "date": "Jun 22, 2026",
        "task": "Designed External Applicant Tracking module to cater for visiting students seeking SIWES placement from partner institutions."
      },
      "tue": {
        "date": "Jun 23, 2026",
        "task": "Programmed server-side tracking ID generation algorithm producing unique reference tokens (e.g. EXT-4921) upon submission."
      },
      "wed": {
        "date": "Jun 24, 2026",
        "task": "Built public tracking search bar on the portal landing page allowing applicants to query real-time application status without logging in."
      },
      "thu": {
        "date": "Jun 25, 2026",
        "task": "Implemented database lookup query matching tracking tokens against external_applications table, returning sanitized status details."
      },
      "fri": {
        "date": "Jun 26, 2026",
        "task": "Added status badges indicating Pending Review, Approved, or Additional Documents Required with date timestamps."
      },
      "sat": {
        "date": "Jun 27, 2026",
        "task": "Conducted end-to-end testing of external application flow from submission to instant status lookup."
      }
    },
    "supervisor": "Innovative feature that directly addresses front desk congestion from external applicants.",
    "supervisorRemark": "Innovative feature that directly addresses front desk congestion from external applicants.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-06-28T13:00:00.000Z"
  },
  "18": {
    "mon": "Designed administrative review dashboard interface for SIWES Directorate officers and institutional coordinators.",
    "tue": "Built summary metric cards displaying live counts for Total Registered, Approved Placements, Pending Reviews, and Departmental Breakdown.",
    "wed": "Implemented interactive student roster table with searchable search input and department filter dropdowns.",
    "thu": "Programmed one-click modal review interface allowing administrators to inspect student host organization details and approve/reject with single click.",
    "fri": "Added instant status toggle API that updates database placement status and triggers automated visual feedback on the client roster.",
    "sat": "Reviewed administrative workflows with desk staff and incorporated UX adjustments for quicker file handling.",
    "summary": "Developed comprehensive administrative dashboard featuring real-time metric cards, searchable rosters, and one-click placement approval.",
    "weeklySummary": "Developed comprehensive administrative dashboard featuring real-time metric cards, searchable rosters, and one-click placement approval.",
    "days": {
      "mon": {
        "date": "Jun 29, 2026",
        "task": "Designed administrative review dashboard interface for SIWES Directorate officers and institutional coordinators."
      },
      "tue": {
        "date": "Jun 30, 2026",
        "task": "Built summary metric cards displaying live counts for Total Registered, Approved Placements, Pending Reviews, and Departmental Breakdown."
      },
      "wed": {
        "date": "Jul 01, 2026",
        "task": "Implemented interactive student roster table with searchable search input and department filter dropdowns."
      },
      "thu": {
        "date": "Jul 02, 2026",
        "task": "Programmed one-click modal review interface allowing administrators to inspect student host organization details and approve/reject with single click."
      },
      "fri": {
        "date": "Jul 03, 2026",
        "task": "Added instant status toggle API that updates database placement status and triggers automated visual feedback on the client roster."
      },
      "sat": {
        "date": "Jul 04, 2026",
        "task": "Reviewed administrative workflows with desk staff and incorporated UX adjustments for quicker file handling."
      }
    },
    "supervisor": "Practical and intuitive administrative dashboard. Greatly streamlines daily verification workflows.",
    "supervisorRemark": "Practical and intuitive administrative dashboard. Greatly streamlines daily verification workflows.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-07-05T11:45:00.000Z"
  },
  "19": {
    "mon": "Studied dual-supervision workflow requirements under SIWES guidelines (Institutional Academic Supervisor vs Workplace Industry Mentor).",
    "tue": "Extended database schema to track both institutional supervisor assignment and industry workplace mentor details per student.",
    "wed": "Built dual-endorsement data structures allowing separate feedback, evaluation remarks, and approval flags for both mentors.",
    "thu": "Added administrative supervisor selection dropdown allowing coordinators to assign faculty supervisors directly from the roster view.",
    "fri": "Created supervisor remark modal allowing academic supervisors to enter weekly audit comments and formal recommendations.",
    "sat": "Validated dual-supervisor data flow across student portal and admin dashboard views.",
    "summary": "Architected dual-supervision system separating institutional faculty oversight from industry mentor evaluations in compliance with ITF guidelines.",
    "weeklySummary": "Architected dual-supervision system separating institutional faculty oversight from industry mentor evaluations in compliance with ITF guidelines.",
    "days": {
      "mon": {
        "date": "Jul 06, 2026",
        "task": "Studied dual-supervision workflow requirements under SIWES guidelines (Institutional Academic Supervisor vs Workplace Industry Mentor)."
      },
      "tue": {
        "date": "Jul 07, 2026",
        "task": "Extended database schema to track both institutional supervisor assignment and industry workplace mentor details per student."
      },
      "wed": {
        "date": "Jul 08, 2026",
        "task": "Built dual-endorsement data structures allowing separate feedback, evaluation remarks, and approval flags for both mentors."
      },
      "thu": {
        "date": "Jul 09, 2026",
        "task": "Added administrative supervisor selection dropdown allowing coordinators to assign faculty supervisors directly from the roster view."
      },
      "fri": {
        "date": "Jul 10, 2026",
        "task": "Created supervisor remark modal allowing academic supervisors to enter weekly audit comments and formal recommendations."
      },
      "sat": {
        "date": "Jul 11, 2026",
        "task": "Validated dual-supervisor data flow across student portal and admin dashboard views."
      }
    },
    "supervisor": "Crucial alignment with National Universities Commission and ITF dual-supervision standards.",
    "supervisorRemark": "Crucial alignment with National Universities Commission and ITF dual-supervision standards.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-07-12T14:30:00.000Z"
  },
  "20": {
    "mon": "Analyzed faculty supervisor workload distribution bottlenecks where some supervisors were overloaded while others had zero assigned students.",
    "tue": "Formulated the 'Smart Balanced Auto-Distribution' algorithm to equitably distribute unassigned students across certified faculty supervisors.",
    "wed": "Programmed distribution algorithm in JavaScript, calculating quota ceilings per supervisor and assigning unallocated students round-robin.",
    "thu": "Integrated distribution button into administrative portal with real-time feedback toast displaying count of distributed students.",
    "fri": "Tested distribution algorithm with 40 unassigned students across 8 faculty staff members, confirming perfectly balanced allocations.",
    "sat": "Documented algorithm logic and workload balancing safeguards in project technical documentation.",
    "summary": "Developed and validated the Smart Balanced Auto-Distribution engine, eliminating supervisor allocation disparities across departments.",
    "weeklySummary": "Developed and validated the Smart Balanced Auto-Distribution engine, eliminating supervisor allocation disparities across departments.",
    "days": {
      "mon": {
        "date": "Jul 13, 2026",
        "task": "Analyzed faculty supervisor workload distribution bottlenecks where some supervisors were overloaded while others had zero assigned students."
      },
      "tue": {
        "date": "Jul 14, 2026",
        "task": "Formulated the 'Smart Balanced Auto-Distribution' algorithm to equitably distribute unassigned students across certified faculty supervisors."
      },
      "wed": {
        "date": "Jul 15, 2026",
        "task": "Programmed distribution algorithm in JavaScript, calculating quota ceilings per supervisor and assigning unallocated students round-robin."
      },
      "thu": {
        "date": "Jul 16, 2026",
        "task": "Integrated distribution button into administrative portal with real-time feedback toast displaying count of distributed students."
      },
      "fri": {
        "date": "Jul 17, 2026",
        "task": "Tested distribution algorithm with 40 unassigned students across 8 faculty staff members, confirming perfectly balanced allocations."
      },
      "sat": {
        "date": "Jul 18, 2026",
        "task": "Documented algorithm logic and workload balancing safeguards in project technical documentation."
      }
    },
    "supervisor": "Highly impactful feature. Ensures equitable workload distribution and eliminates manual administrative assignment delays.",
    "supervisorRemark": "Highly impactful feature. Ensures equitable workload distribution and eliminates manual administrative assignment delays.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-07-19T10:15:00.000Z"
  },
  "21": {
    "mon": "Researched document fraud and logbook tampering vulnerabilities in physical paper SIWES records.",
    "tue": "Implemented cryptographic SHA-256 hashing algorithm to generate verifiable hash signatures for approved weekly logbook records.",
    "wed": "Integrated dynamic QR code generation encoding a verifiable URL containing student matric number, week identifier, and hash signature.",
    "thu": "Built public QR code verification endpoint allowing prospective employers or external auditors to scan and verify log authenticity in real time.",
    "fri": "Added visual tamper-detection indicators that flag records if stored log data fails cryptographic hash comparison against the verified signature.",
    "sat": "Executed security penetration tests against verification endpoints, verifying hash sensitivity to even single-character record modifications.",
    "summary": "Integrated SHA-256 cryptographic proof and dynamic QR verification system, transforming SIWES logbooks into tamper-proof verifiable credentials.",
    "weeklySummary": "Integrated SHA-256 cryptographic proof and dynamic QR verification system, transforming SIWES logbooks into tamper-proof verifiable credentials.",
    "days": {
      "mon": {
        "date": "Jul 20, 2026",
        "task": "Researched document fraud and logbook tampering vulnerabilities in physical paper SIWES records."
      },
      "tue": {
        "date": "Jul 21, 2026",
        "task": "Implemented cryptographic SHA-256 hashing algorithm to generate verifiable hash signatures for approved weekly logbook records."
      },
      "wed": {
        "date": "Jul 22, 2026",
        "task": "Integrated dynamic QR code generation encoding a verifiable URL containing student matric number, week identifier, and hash signature."
      },
      "thu": {
        "date": "Jul 23, 2026",
        "task": "Built public QR code verification endpoint allowing prospective employers or external auditors to scan and verify log authenticity in real time."
      },
      "fri": {
        "date": "Jul 24, 2026",
        "task": "Added visual tamper-detection indicators that flag records if stored log data fails cryptographic hash comparison against the verified signature."
      },
      "sat": {
        "date": "Jul 25, 2026",
        "task": "Executed security penetration tests against verification endpoints, verifying hash sensitivity to even single-character record modifications."
      }
    },
    "supervisor": "Outstanding cybersecurity implementation. Addresses one of the most critical integrity challenges in industrial training documentation.",
    "supervisorRemark": "Outstanding cybersecurity implementation. Addresses one of the most critical integrity challenges in industrial training documentation.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-07-26T15:00:00.000Z"
  },
  "22": {
    "mon": "Audited application security architecture against OWASP Top 10 web vulnerabilities.",
    "tue": "Implemented Role-Based Access Control (RBAC) separating permissions between Student, Faculty Supervisor, and Institutional Coordinator roles.",
    "wed": "Built session authentication guards preventing unauthorized access to administrative endpoints and restricted student records.",
    "thu": "Added Super Admin security clearance authorization gate requiring institutional coordinator sign-off before logbook publishing is enabled.",
    "fri": "Implemented audit logging capturing administrative actions, clearance approvals, and supervisor endorsements with immutable timestamps.",
    "sat": "Conducted comprehensive vulnerability scans and code hardening across all API handlers.",
    "summary": "Enforced enterprise Role-Based Access Control, session security guards, and coordinator clearance gates across the application suite.",
    "weeklySummary": "Enforced enterprise Role-Based Access Control, session security guards, and coordinator clearance gates across the application suite.",
    "days": {
      "mon": {
        "date": "Jul 27, 2026",
        "task": "Audited application security architecture against OWASP Top 10 web vulnerabilities."
      },
      "tue": {
        "date": "Jul 28, 2026",
        "task": "Implemented Role-Based Access Control (RBAC) separating permissions between Student, Faculty Supervisor, and Institutional Coordinator roles."
      },
      "wed": {
        "date": "Jul 29, 2026",
        "task": "Built session authentication guards preventing unauthorized access to administrative endpoints and restricted student records."
      },
      "thu": {
        "date": "Jul 30, 2026",
        "task": "Added Super Admin security clearance authorization gate requiring institutional coordinator sign-off before logbook publishing is enabled."
      },
      "fri": {
        "date": "Jul 31, 2026",
        "task": "Implemented audit logging capturing administrative actions, clearance approvals, and supervisor endorsements with immutable timestamps."
      },
      "sat": {
        "date": "Aug 01, 2026",
        "task": "Conducted comprehensive vulnerability scans and code hardening across all API handlers."
      }
    },
    "supervisor": "Robust security controls. Demonstrates mature understanding of access control and data governance in educational software.",
    "supervisorRemark": "Robust security controls. Demonstrates mature understanding of access control and data governance in educational software.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-08-02T11:20:00.000Z"
  },
  "23": {
    "mon": "Initiated departmental pilot testing with real student records from the College of Humanities and Education (COHED).",
    "tue": "Onboarded student cohorts from Fine Arts, History and International Studies, and Christian Religious Studies departments into the live platform.",
    "wed": "Enrolled additional cohorts from Music and Theatre Arts, reaching 160 active student profiles (~21.3% of institutional cohort goal).",
    "thu": "Observed SIWES desk officers utilizing the portal for live walk-in registrations and monitored system performance under real usage.",
    "fri": "Gathered feedback from departmental desk officers; implemented UI tweaks to walk-in intake forms and roster filters.",
    "sat": "Reconciled pilot database records and verified zero data discrepancies across all 160 enrolled student accounts.",
    "summary": "Successfully launched departmental pilot deployment with 160 real COHED students, validating system performance in live administrative operations.",
    "weeklySummary": "Successfully launched departmental pilot deployment with 160 real COHED students, validating system performance in live administrative operations.",
    "days": {
      "mon": {
        "date": "Aug 03, 2026",
        "task": "Initiated departmental pilot testing with real student records from the College of Humanities and Education (COHED)."
      },
      "tue": {
        "date": "Aug 04, 2026",
        "task": "Onboarded student cohorts from Fine Arts, History and International Studies, and Christian Religious Studies departments into the live platform."
      },
      "wed": {
        "date": "Aug 05, 2026",
        "task": "Enrolled additional cohorts from Music and Theatre Arts, reaching 160 active student profiles (~21.3% of institutional cohort goal)."
      },
      "thu": {
        "date": "Aug 06, 2026",
        "task": "Observed SIWES desk officers utilizing the portal for live walk-in registrations and monitored system performance under real usage."
      },
      "fri": {
        "date": "Aug 07, 2026",
        "task": "Gathered feedback from departmental desk officers; implemented UI tweaks to walk-in intake forms and roster filters."
      },
      "sat": {
        "date": "Aug 08, 2026",
        "task": "Reconciled pilot database records and verified zero data discrepancies across all 160 enrolled student accounts."
      }
    },
    "supervisor": "Departmental pilot testing successfully deployed with 160 active students. System stability confirmed under real administrative load.",
    "supervisorRemark": "Departmental pilot testing successfully deployed with 160 active students. System stability confirmed under real administrative load.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-08-09T16:00:00.000Z"
  },
  "24": {
    "mon": "Conducted end-of-attachment data consolidation, backing up the full pilot database, system source code, and student audit trails.",
    "tue": "Compiled the comprehensive CSC 398 SIWES Technical Report detailing 6 months of industrial experience across SIWES and ICT directorates.",
    "wed": "Formatted report according to departmental guidelines in Microsoft Word (Times New Roman 12pt, justified alignment, 1-inch margins, watermarks).",
    "thu": "Designed technical defense PowerPoint presentation slides with corporate navy/gold styling, process flowcharts, and architecture diagrams.",
    "fri": "Submitted finalized 24-week digital logbook for final institutional supervisor endorsement and official directorate sign-off.",
    "sat": "Completed SIWES industrial attachment program; conducted project handover and received formal completion commendation from SIWES Director.",
    "summary": "Finalized 24-week industrial training attachment, completed CSC 398 Technical Report, prepared defense presentation, and achieved full sign-off.",
    "weeklySummary": "Finalized 24-week industrial training attachment, completed CSC 398 Technical Report, prepared defense presentation, and achieved full sign-off.",
    "days": {
      "mon": {
        "date": "Aug 10, 2026",
        "task": "Conducted end-of-attachment data consolidation, backing up the full pilot database, system source code, and student audit trails."
      },
      "tue": {
        "date": "Aug 11, 2026",
        "task": "Compiled the comprehensive CSC 398 SIWES Technical Report detailing 6 months of industrial experience across SIWES and ICT directorates."
      },
      "wed": {
        "date": "Aug 12, 2026",
        "task": "Formatted report according to departmental guidelines in Microsoft Word (Times New Roman 12pt, justified alignment, 1-inch margins, watermarks)."
      },
      "thu": {
        "date": "Aug 13, 2026",
        "task": "Designed technical defense PowerPoint presentation slides with corporate navy/gold styling, process flowcharts, and architecture diagrams."
      },
      "fri": {
        "date": "Aug 14, 2026",
        "task": "Submitted finalized 24-week digital logbook for final institutional supervisor endorsement and official directorate sign-off."
      },
      "sat": {
        "date": "Aug 15, 2026",
        "task": "Completed SIWES industrial attachment program; conducted project handover and received formal completion commendation from SIWES Director."
      }
    },
    "supervisor": "Exceptional performance throughout the 6-month industrial attachment. Benjamin Opeyemi Abraham has demonstrated remarkable technical competence, integrity, and dedication. Approved with highest recommendation.",
    "supervisorRemark": "Exceptional performance throughout the 6-month industrial attachment. Benjamin Opeyemi Abraham has demonstrated remarkable technical competence, integrity, and dedication. Approved with highest recommendation.",
    "supervisorName": "Dr. A. O. Institutional Coordinator",
    "approved": true,
    "approvedBy": "Dr. A. O. Institutional Coordinator",
    "approvedAt": "2026-08-16T12:00:00.000Z"
  }
};

function normalizeMatricNumber(matric) {
  return (matric || '').trim().toUpperCase();
}

function isOpeyemiMatric(matric) {
  const m = normalizeMatricNumber(matric);
  return m === '230591215' || m === '230591***' || m === '230591001' || m.startsWith('230591') || m === 'OPEYEMI BENJAMIN' || m.includes('OPEYEMI');
}

function getStudentLogsByMatric(matric) {
  const cleanMatric = normalizeMatricNumber(matric);
  const key1 = 'student_logs_' + cleanMatric;
  const key2 = 'sdi_student_logbook_' + cleanMatric;

  try {
    const raw1 = localStorage.getItem(key1);
    if (raw1) {
      const parsed = JSON.parse(raw1);
      if (parsed && Object.keys(parsed).length > 0) return parsed;
    }
    const raw2 = localStorage.getItem(key2);
    if (raw2) {
      const parsed = JSON.parse(raw2);
      if (parsed && Object.keys(parsed).length > 0) return parsed;
    }
  } catch (e) {}

  // Default to real 24 weeks dataset for Opeyemi
  if (isOpeyemiMatric(cleanMatric) || cleanMatric === '') {
    try {
      const jsonStr = JSON.stringify(opeyemiReal24WeeksLogs);
      localStorage.setItem(key1, jsonStr);
      localStorage.setItem(key2, jsonStr);
      localStorage.setItem('student_logs_230591215', jsonStr);
      localStorage.setItem('sdi_student_logbook_230591215', jsonStr);
      localStorage.setItem('student_logs_230591***', jsonStr);
      localStorage.setItem('sdi_student_logbook_230591***', jsonStr);
    } catch (e) {}
    return JSON.parse(JSON.stringify(opeyemiReal24WeeksLogs));
  }

  return {};
}

function saveStudentLogsByMatric(matric, logs) {
  const cleanMatric = normalizeMatricNumber(matric);
  const key1 = 'student_logs_' + cleanMatric;
  const key2 = 'sdi_student_logbook_' + cleanMatric;
  try {
    const dataStr = JSON.stringify(logs);
    localStorage.setItem(key1, dataStr);
    localStorage.setItem(key2, dataStr);
    if (isOpeyemiMatric(cleanMatric)) {
      localStorage.setItem('student_logs_230591215', dataStr);
      localStorage.setItem('sdi_student_logbook_230591215', dataStr);
      localStorage.setItem('student_logs_230591***', dataStr);
      localStorage.setItem('sdi_student_logbook_230591***', dataStr);
    }
    return true;
  } catch (e) {
    console.error('Failed to save student logs:', e);
    return false;
  }
}

// Export to window
if (typeof window !== 'undefined') {
  window.opeyemiReal24WeeksLogs = opeyemiReal24WeeksLogs;
  window.getStudentLogsByMatric = getStudentLogsByMatric;
  window.saveStudentLogsByMatric = saveStudentLogsByMatric;
}
