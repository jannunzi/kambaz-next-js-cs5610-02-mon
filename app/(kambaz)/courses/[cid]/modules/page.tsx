import Lesson from "./Lesson";
import Module from "./Module";
export default function ModulesPage() {
    return (
        <div>
            <h1>Modules</h1>
            <ul>
                <Module title="Chapter 1">
                    <Lesson title="HTML">
                    <li>    
                        Lesson 1.1
                    </li>
                    <li>
                        Lesson 1.2
                    </li>
                    <li>
                        Lesson 1.3
                    </li>
                    </Lesson>
                </Module>
                <Module title="Chapter 2">
                    <Lesson title="CSS">
                    <li>    
                        Lesson 2.1
                    </li>
                    <li>
                        Lesson 2.2
                    </li>
                    </Lesson>
                </Module>
                <Module title="Chapter 4">
                    <li>
                        Lesson 4.1
                    </li>
                    <li>
                        Lesson 4.2
                    </li>
                    <li>
                        Lesson 4.3
                    </li>
                    <li>
                        Lesson 4.4
                    </li>
                </Module>
                <Module title="Chapter 5">
                    <li>
                        Lesson 5.1
                    </li>
                    <li>
                        Lesson 5.2
                    </li>
                    <li>
                        Lesson 5.3
                    </li>
                </Module>
            </ul>
        </div>
    );
}