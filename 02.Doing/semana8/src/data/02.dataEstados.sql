USE semana08_db;

INSERT INTO estados (nombre)
VALUES
("Aguascalientes"),
("Baja California"),
("Baja California Sur"),
("Campeche"),
("Chiapas"),
("Chihuahua"),
("Coahuila de Zaragoza"),
("Colima"),
("Durango"),
("Guanajuato"),
("Guerrero"),
("Hidalgo"),
("Jalisco"),
("México"),
("Michoacán de Ocampo"),
("Morelos"),
("Nayarit"),
("Nuevo León"),
("Oaxaca"),
("Puebla"),
("Querétaro"),
("Quintana Roo"),
("San Luis Potosí"),
("Sinaloa"),
("Sonora"),
("Tabasco"),
("Tamaulipas"),
("Tlaxcala"),
("Veracruz de Ignacio de la Llave"),
("Yucatán"),
("Zacatecas");

INSERT INTO estados (nombre)
VALUES
("Estado de México");

UPDATE estados SET nombre="Ciudad de México" WHERE id=14;

SELECT * FROM estados ORDER BY id;
SELECT * FROM estados ORDER BY nombre;
