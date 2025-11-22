
import React from 'react';
import { CalculationResult, Language } from '../types';
import { translateItem } from '../data/itemTranslations';

interface MaterialListProps {
  result: CalculationResult | null;
  t: any; // Accepting translation object
  language: Language;
}

export const MaterialList: React.FC<MaterialListProps> = ({ result, t, language }) => {
  
  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-stone-500 border-2 border-dashed border-stone-800/50 rounded-xl bg-stone-900/20 backdrop-blur-sm p-8 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-stone-800/50 flex items-center justify-center mb-4 text-stone-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        </div>
        <p className="text-lg font-medium text-stone-400">{t.recipe_not_selected}</p>
        <p className="text-sm text-stone-600 mt-2 max-w-xs">{t.select_category_prompt}</p>
      </div>
    );
  }

  return (
    <div className="bg-stone-900/60 backdrop-blur-md border border-stone-700/50 rounded-xl shadow-2xl overflow-hidden animate-slide-up h-full flex flex-col">
      {/* Card Header */}
      <div className="bg-stone-900/80 px-6 py-5 border-b border-stone-700/50 flex flex-wrap justify-between items-center gap-4">
        <div>
           <h2 className="text-2xl font-serif text-amber-500 font-bold tracking-wide drop-shadow-sm">
             {translateItem(result.itemName, language)}
           </h2>
           <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">{t.recipe}</p>
        </div>
        <div className="flex items-center gap-3 bg-stone-950/50 px-4 py-2 rounded-lg border border-stone-800">
          <span className="text-xs text-stone-400 uppercase font-bold">{t.quantity}</span>
          <span className="text-xl text-white font-serif font-bold">{result.quantity}</span>
        </div>
      </div>

      {/* Ingredients Body */}
      <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {result.totalIngredients.map((ing, idx) => (
            <div 
              key={idx} 
              className="group relative flex items-center p-3 bg-stone-950/40 border border-stone-800 rounded-lg hover:bg-stone-900 hover:border-amber-700/30 transition-all duration-300"
            >
              {/* Icon Placeholder */}
              <div className="w-12 h-12 rounded-md bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-700/80 font-serif font-bold text-xl mr-4 shadow-inner group-hover:text-amber-500 transition-colors">
                {translateItem(ing.name, language).charAt(0)}
              </div>
              
              <div className="flex-1 min-w-0 flex justify-between items-center">
                <div className="mr-2">
                   <p className="text-stone-300 font-medium truncate group-hover:text-amber-100 transition-colors text-sm sm:text-base" title={translateItem(ing.name, language)}>{translateItem(ing.name, language)}</p>
                </div>
                <div className="text-right">
                   <p className="text-amber-500 text-lg font-bold font-mono leading-tight">
                     {ing.amount.toLocaleString()}
                   </p>
                   {ing.unit && <p className="text-[10px] text-stone-600 text-right">{ing.unit}</p>}
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-stone-950/80 px-6 py-3 border-t border-stone-800 flex justify-between items-center text-[10px] text-stone-600 font-mono uppercase tracking-widest">
        <span>Arden Feudal System</span>
        <span>{result.totalIngredients.length} {t.component}</span>
      </div>
    </div>
  );
};
