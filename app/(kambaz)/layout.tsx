import KambazNavigation from "./Navigation";
export default function KambazLayout(
  { children }: { children: React.ReactNode }) {
  return (
    <table>
      <tr>
        <td align="left" valign="top">
          <KambazNavigation />
        </td>
        <td align="left" valign="top">
          {children}
        </td>
      </tr>
    </table>
  );
}