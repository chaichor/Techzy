const fs = require('fs');
const path = require('path');

// Lista de proyectos y sus rutas
const projects = [
  { path: '.', name: 'techzy-monorepo' },
  { path: './backend', name: 'backend' },
  { path: './frontend', name: 'vite-project' },
  { path: './frontend-admin', name: 'frontend-admin' }
];

// Función para corregir un package.json
function fixPackageJson(projectPath, projectName) {
  const packageJsonPath = path.join(projectPath, 'package.json');
  
  try {
    // Leer el archivo
    const data = fs.readFileSync(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(data);
    
    // Verificar si hay dependencia circular
    let hasChanged = false;
    
    if (packageJson.dependencies && packageJson.dependencies[projectName]) {
      console.log(`Eliminando dependencia circular ${projectName} de ${packageJsonPath}`);
      delete packageJson.dependencies[projectName];
      hasChanged = true;
      
      // Si la sección dependencies quedó vacía, eliminarla
      if (Object.keys(packageJson.dependencies).length === 0) {
        delete packageJson.dependencies;
      }
    }
    
    // Guardar cambios si fue modificado
    if (hasChanged) {
      fs.writeFileSync(
        packageJsonPath, 
        JSON.stringify(packageJson, null, 2) + '\n',
        'utf8'
      );
      console.log(`✅ Arreglado: ${packageJsonPath}`);
    } else {
      console.log(`✓ Sin cambios necesarios: ${packageJsonPath}`);
    }
  } catch (err) {
    console.error(`❌ Error procesando ${packageJsonPath}:`, err);
  }
}

// Procesar todos los proyectos
console.log('🔍 Buscando y eliminando dependencias circulares...');
projects.forEach(project => {
  fixPackageJson(project.path, project.name);
});

console.log('\n✨ Proceso completado. Se han eliminado las dependencias circulares.');
console.log('⚠️ Nota: Si las dependencias circulares vuelven a aparecer después de ejecutar npm o turbo,');
console.log('   ejecuta este script nuevamente o considera configurar una solución permanente');
console.log('   a través de hooks de git o scripts de npm.\n');
